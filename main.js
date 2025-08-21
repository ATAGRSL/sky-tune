import { getWeatherData } from './api.js';
import * as ui from './ui.js';
import { initVoiceCommands } from './voice.js';

window.addEventListener('load', () => {
    getWeatherData(ui, null);
    initVoiceCommands(() => getWeatherData(ui, null));
});

window.addEventListener('online', () => {
    console.log('İnternet bağlantısı geri geldi');
    getWeatherData(ui, null);
});

window.addEventListener('offline', () => {
    console.log('İnternet bağlantısı kaybedildi');
    const offlineMessage = document.createElement('div');
    offlineMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 165, 0, 0.9);
        color: white;
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 0.9rem;
        z-index: 1000;
        animation: fadeInUp 0.3s ease-out;
    `;
    offlineMessage.textContent = '🔌 Offline mod - Önbellekten veri gösteriliyor';
    document.body.appendChild(offlineMessage);

    setTimeout(() => {
        offlineMessage.remove();
    }, 3000);
});
