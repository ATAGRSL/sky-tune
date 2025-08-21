const voiceButton = document.getElementById('voiceButton');
const voiceStatus = document.getElementById('voiceStatus');
const voiceText = document.getElementById('voiceText');
const weatherInfo = document.getElementById('weatherInfo');
const musicRecommendation = document.getElementById('musicRecommendation');

let recognition = null;
let isListening = false;

export function initVoiceCommands(getWeatherData) {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();

        recognition.lang = 'tr-TR';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            isListening = true;
            voiceButton.classList.add('listening');
            voiceStatus.style.display = 'block';
            voiceText.textContent = 'Dinleniyor...';
        };

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            handleVoiceCommand(command, getWeatherData);
        };

        recognition.onerror = (event) => {
            console.error('Ses tanıma hatası:', event.error);
            stopListening();
            speak('Ses tanıma hatası oluştu. Lütfen tekrar deneyin.');
        };

        recognition.onend = () => {
            stopListening();
        };

        voiceButton.addEventListener('click', toggleVoiceRecognition);
    } else {
        voiceButton.style.display = 'none';
        console.log('Web Speech API desteklenmiyor');
    }
}

function toggleVoiceRecognition() {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

function startListening() {
    if (recognition && !isListening) {
        recognition.start();
    }
}

function stopListening() {
    if (recognition && isListening) {
        recognition.stop();
        isListening = false;
        voiceButton.classList.remove('listening');
        voiceStatus.style.display = 'none';
    }
}

function handleVoiceCommand(command, getWeatherData) {
    console.log('Sesli komut:', command);

    const responses = {
        'hava durumu': () => {
            const weatherText = `${weatherInfo.textContent}. ${musicRecommendation.textContent}`;
            speak(weatherText);
        },
        'müzik öner': () => {
            const musicText = musicRecommendation.textContent;
            speak(musicText);
        },
        'sıcaklık': () => {
            const tempText = weatherInfo.textContent.split(',')[1] || 'Sıcaklık bilgisi mevcut değil';
            speak(`Mevcut sıcaklık ${tempText}`);
        },
        'şehir': () => {
            const cityText = weatherInfo.textContent.split(',')[0] || 'Şehir bilgisi mevcut değil';
            speak(`Şu anda ${cityText} için hava durumu gösteriliyor`);
        },
        'yenile': () => {
            speak('Hava durumu yenileniyor');
            getWeatherData();
        },
        'merhaba': () => {
            speak('Merhaba! Hava durumu asistanınız hizmetinizde. Hava durumu öğrenmek için "hava durumu" deyin.');
        },
        'yardım': () => {
            speak('Kullanabileceğiniz komutlar: hava durumu, müzik öner, sıcaklık, şehir, yenile, merhaba, yardım');
        }
    };

    for (const [key, action] of Object.entries(responses)) {
        if (command.includes(key)) {
            action();
            return;
        }
    }

    speak('Üzgünüm, bu komutu anlayamadım. Yardım için "yardım" deyin.');
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.rate = 0.9;
        utterance.pitch = 1;

        utterance.onstart = () => {
            voiceText.textContent = '🔊 Konuşuyor...';
            voiceStatus.style.display = 'block';
        };

        utterance.onend = () => {
            voiceStatus.style.display = 'none';
        };

        speechSynthesis.speak(utterance);
    } else {
        console.log('Text-to-Speech desteklenmiyor');
        voiceText.textContent = text;
        voiceStatus.style.display = 'block';
        setTimeout(() => {
            voiceStatus.style.display = 'none';
        }, 3000);
    }
}
