const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherData(ui, voice) {
    try {
        ui.showLoadingState();

        if (!navigator.geolocation) {
            throw new Error('Tarayıcınız konum servislerini desteklemiyor.');
        }

        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;

        const cacheKey = `weather_${latitude.toFixed(2)}_${longitude.toFixed(2)}`;
        const cachedData = getCachedWeatherData(cacheKey);

        if (cachedData && !isCacheExpired(cachedData.timestamp)) {
            console.log('Önbellekten veri kullanılıyor');
            ui.updateWeatherUI(cachedData.data);
            ui.updateDetailedWeather(cachedData.data);
            ui.hideLoadingState();
            return;
        }

        const response = await fetch(
            `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=tr`
        );

        if (!response.ok) {
            if (cachedData) {
                console.log('API hatası, önbellekten eski veri kullanılıyor');
                ui.updateWeatherUI(cachedData.data);
                ui.updateDetailedWeather(cachedData.data);
                ui.hideLoadingState();
                return;
            }
            throw new Error(`API Hatası: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const weatherData = {
            data: data,
            timestamp: Date.now()
        };

        localStorage.setItem(cacheKey, JSON.stringify(weatherData));

        ui.updateWeatherUI(data);
        ui.updateDetailedWeather(data);
        ui.hideLoadingState();

    } catch (error) {
        console.error('Hata:', error);
        ui.handleError(error.message);
    }
}

export function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
        });
    });
}

export function getCachedWeatherData(cacheKey) {
    try {
        const cached = localStorage.getItem(cacheKey);
        return cached ? JSON.parse(cached) : null;
    } catch (error) {
        console.error('Önbellek okuma hatası:', error);
        return null;
    }
}

export function isCacheExpired(timestamp) {
    const CACHE_DURATION = 30 * 60 * 1000;
    return (Date.now() - timestamp) > CACHE_DURATION;
}

export function clearWeatherCache() {
    try {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('weather_'));
        keys.forEach(key => localStorage.removeItem(key));
        console.log('Hava durumu önbelleği temizlendi');
    } catch (error) {
        console.error('Önbellek temizleme hatası:', error);
    }
}

export function getConnectionStatus() {
    return navigator.onLine;
}
