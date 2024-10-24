let currentAudio = null;

function playSound(soundName) {
    let soundFile = '';

    switch (soundName) {
        case 'bus':
            soundFile = '../sounds/bus.mp3';
            break;
        case 'football':
            soundFile = '../sounds/football.mp3';
            break;
        case 'home':
            soundFile = '../sounds/home.mp3';
            break;
        case 'teacher':
            soundFile = '../sounds/teacher.mp3';
            break;
        default:
            alert("som não encontrado");
            return;
    }
    if (currentAudio && !currentAudio.paused) {
        return;
    }
    currentAudio = new Audio(soundFile);
    currentAudio.play();
    currentAudio.onended = function() {
        currentAudio = null;
    };
}