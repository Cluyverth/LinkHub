/**
 * Odryin Links - Main Script
 * Handles real-time clock updates and accordion menu interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Real-time Clock Logic ---
    function updateTime() {
        const now = new Date();
        const timeDisplay = document.getElementById('clock');
        
        // Format time as HH:MM (e.g., 14:05)
        const timeString = now.toLocaleTimeString('pt-BR', { 
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit', 
            minute: '2-digit' 
        });
        if(timeDisplay) {
            timeDisplay.textContent = timeString;
        }
    }

    // Initialize clock and set interval
    updateTime();
    setInterval(updateTime, 1000);


    // --- 2. YouTube Accordion Logic ---
    const accordionBtn = document.getElementById('yt-accordion-btn');
    const youtubeList = document.getElementById('youtube-list');
    const arrowIcon = document.getElementById('yt-arrow');

    if (accordionBtn && youtubeList && arrowIcon) {
        accordionBtn.addEventListener('click', () => {
            // Toggle display status
            const isHidden = getComputedStyle(youtubeList).display === 'none';
            
            if (isHidden) {
                youtubeList.style.display = 'flex';
                arrowIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                youtubeList.style.display = 'none';
                arrowIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    }

    // --- 3. Dark/Light Mode Toggle ---
    const homeBtn = document.getElementById('home-btn');
    const screen = document.querySelector('.screen');

    if (homeBtn && screen) {
        homeBtn.addEventListener('click', () => {
            // Adiciona ou remove a classe .light-mode na tela
            screen.classList.toggle('light-mode');
            
            // (Opcional) Faz uma vibraçãozinha se o celular suportar (Android)
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    }
});