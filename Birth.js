document.addEventListener('DOMContentLoaded', function() {
    createConfetti();

    // Reveal Moments Section on Button Click
    const revealButton = document.getElementById('revealButton');
    const momentsSection = document.getElementById('momentsSection');

    revealButton.addEventListener('click', function() {
        momentsSection.classList.toggle('hidden');
        revealButton.classList.toggle('hidden');
    });

    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confettiContainer.appendChild(confetti);
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const momentsSection = document.getElementById('momentsSection');
    const speakButton = document.getElementById('speakButton');
    const stopButton = document.getElementById('stopButton');
    const shayariSection = document.getElementById('shayariSection');
    const shayariText = document.querySelector('.shayari-text').innerText;

    let speechSynthesisUtterance = null;

    revealButton.addEventListener('click', function() {
        momentsSection.classList.remove('hidden');
        momentsSection.scrollIntoView({ behavior: 'smooth' });
        revealButton.style.display = 'none';
    });

    speakButton.addEventListener('click', function() {
        if (speechSynthesisUtterance) {
            window.speechSynthesis.cancel();
        }
        shayariSection.classList.remove('hidden');
        speechSynthesisUtterance = new SpeechSynthesisUtterance(shayariText);
        speechSynthesisUtterance.lang = 'en-US'; // Set the language to English
        window.speechSynthesis.speak(speechSynthesisUtterance);
        stopButton.classList.remove('hidden');
        speakButton.classList.add('hidden');
    });

    stopButton.addEventListener('click', function() {
        if (speechSynthesisUtterance) {
            window.speechSynthesis.cancel();
        }
        shayariSection.classList.add('hidden');
        stopButton.classList.add('hidden');
        speakButton.classList.remove('hidden');
    });
});