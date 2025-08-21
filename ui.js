const weatherIcon = document.getElementById('weatherIcon');
const weatherInfo = document.getElementById('weatherInfo');
const musicRecommendation = document.getElementById('musicRecommendation');
const body = document.body;
const loadingDots = document.getElementById('loadingDots');
const weatherIconContent = document.getElementById('weatherIconContent');
const detailedWeather = document.getElementById('detailedWeather');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const visibilityElement = document.getElementById('visibility');

export function showLoadingState() {
    weatherIconContent.style.display = 'none';
    loadingDots.style.display = 'block';
    detailedWeather.style.display = 'none';

    const loadingTexts = [
        'Konum alınıyor...',
        'Hava durumu sorgulanıyor...',
        'Müzik önerin hazırlanıyor...'
    ];

    let textIndex = 0;
    const loadingTextElement = document.getElementById('loadingText');
    const musicLoadingElement = document.getElementById('musicLoadingText');

    const textInterval = setInterval(() => {
        loadingTextElement.textContent = loadingTexts[textIndex % loadingTexts.length];
        musicLoadingElement.textContent = loadingTexts[(textIndex + 1) % loadingTexts.length];
        textIndex++;
    }, 1500);

    window.loadingInterval = textInterval;
}

export function hideLoadingState() {
    if (window.loadingInterval) {
        clearInterval(window.loadingInterval);
    }
    loadingDots.style.display = 'none';
    weatherIconContent.style.display = 'block';
    detailedWeather.style.display = 'block';
}

export function updateWeatherUI(data) {
    const weather = data.weather[0].main;
    const temp = Math.round(data.main.temp);
    const city = data.name;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const currentTime = Date.now() / 1000;

    const isDayTime = currentTime > sunrise && currentTime < sunset;

    weatherInfo.innerHTML = `<div>${city}</div><div style="font-size: 0.9em; opacity: 0.8;">${getWeatherDescription(weather)}, ${temp}°C</div>`;

    weatherIconContent.textContent = getWeatherIcon(weather, isDayTime);

    const recommendation = getMusicRecommendation(weather, isDayTime);
    musicRecommendation.innerHTML = `<div>Bugün tam da</div><div style="font-weight: 500; color: #fff;">${recommendation}</div><div>dinlemelik! 🎵</div>`;

    updateBackground(weather, isDayTime);
}

export function updateDetailedWeather(data) {
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed * 3.6);
    const visibility = Math.round(data.visibility / 1000);

    humidityElement.textContent = `Nem: %${humidity}`;
    windElement.textContent = `Rüzgar: ${windSpeed} km/s`;
    visibilityElement.textContent = `Görüş: ${visibility} km`;

    addWeatherAnimations();
}

export function addWeatherAnimations() {
    const elements = [humidityElement, windElement, visibilityElement];
    elements.forEach((element, index) => {
        element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
}

export function updateBackground(weather, isDayTime = true) {
    const backgrounds = {
        'Clear': isDayTime ? 'var(--bg-clear)' : 'var(--bg-night-clear)',
        'Clouds': isDayTime ? 'var(--bg-clouds)' : 'var(--bg-night-clouds)',
        'Rain': 'var(--bg-rain)',
        'Snow': 'var(--bg-snow)',
        'Thunderstorm': 'var(--bg-thunderstorm)',
        'Drizzle': 'var(--bg-rain)',
        'Mist': isDayTime ? 'var(--bg-clouds)' : 'var(--bg-night-mist)',
        'Fog': isDayTime ? 'var(--bg-clouds)' : 'var(--bg-night-mist)'
    };

    const background = backgrounds[weather] || 'var(--bg-default)';
    body.style.background = background;
}

export function getWeatherDescription(weather) {
    const descriptions = {
        'Clear': 'Güneşli',
        'Clouds': 'Bulutlu',
        'Rain': 'Yağmurlu',
        'Snow': 'Karlı',
        'Thunderstorm': 'Fırtınalı',
        'Drizzle': 'Çiseleme',
        'Mist': 'Sisli',
        'Fog': 'Sisli'
    };

    return descriptions[weather] || weather;
}

export function getWeatherIcon(weather, isDayTime = true) {
    const icons = {
        'Clear': isDayTime ? '☀️' : '🌙',
        'Clouds': isDayTime ? '☁️' : '☁️',
        'Rain': '🌧️',
        'Snow': '❄️',
        'Thunderstorm': '⛈️',
        'Drizzle': '🌦️',
        'Mist': '🌫️',
        'Fog': '🌫️'
    };

    return icons[weather] || (isDayTime ? '🌤️' : '🌙');
}

export function getMusicRecommendation(weather, isDayTime = true) {
    const recommendations = {
        'Clear': isDayTime ? 'Enerjik Pop' : 'Sakin Akustik',
        'Clouds': isDayTime ? 'Indie Rock' : 'Lo-Fi Chill',
        'Rain': 'Sakin Lofi Hip-Hop',
        'Snow': 'Akustik Klasikler',
        'Thunderstorm': 'Elektronik Ambient',
        'Drizzle': 'Jazz',
        'Mist': isDayTime ? 'Klasik Müzik' : 'Ambient',
        'Fog': isDayTime ? 'Klasik Müzik' : 'Ambient'
    };

    return recommendations[weather] || 'Çeşitli Müzikler';
}

export function handleError(message) {
    hideLoadingState();

    const errorMessages = {
        'geolocation': {
            title: 'Konum Erişimi Reddedildi',
            description: 'Lütfen tarayıcı ayarlarından konum iznini etkinleştirin.',
            icon: '🚫'
        },
        'network': {
            title: 'İnternet Bağlantısı Yok',
            description: 'Lütfen internet bağlantınızı kontrol edin.',
            icon: '📶'
        },
        'api': {
            title: 'API Hatası',
            description: 'Hava durumu servisi şu anda kullanılamıyor.',
            icon: '⚠️'
        },
        'default': {
            title: 'Beklenmedik Hata',
            description: 'Bir hata oluştu. Lütfen sayfayı yenileyin.',
            icon: '❌'
        }
    };

    let errorType = 'default';
    if (message.includes('konum') || message.includes('geolocation')) {
        errorType = 'geolocation';
    } else if (message.includes('fetch') || message.includes('network')) {
        errorType = 'network';
    } else if (message.includes('API') || message.includes('401') || message.includes('403')) {
        errorType = 'api';
    }

    const error = errorMessages[errorType];
    weatherIconContent.textContent = error.icon;
    weatherInfo.innerHTML = `<div style="color: #ff6b6b; font-weight: 500;">${error.title}</div><div style="font-size: 0.9em; opacity: 0.7;">${error.description}</div>`;
    musicRecommendation.innerHTML = `<div>Tekrar denemek için</div><div style="font-weight: 500; color: #fff;">Sayfayı Yenileyin 🔄</div>`;

    body.style.background = 'var(--bg-default)';
    detailedWeather.style.display = 'none';

    console.error('Hava durumu uygulaması hatası:', message);

    if (message.includes('API key')) {
        setTimeout(() => {
            alert('🎵 API Key Hatası!\n\nLütfen api.js dosyasındaki API_KEY kısmını kendi OpenWeatherMap API key\'inizle değiştirin.\n\nÜcretsiz API key almak için: https://openweathermap.org/api');
        }, 1000);
    }
}
