// 音樂播放器控制
const musicPlayer = document.getElementById('music-player');
const backgroundMusic = document.getElementById('background-music');

let isPlaying = false;

musicPlayer.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicPlayer.innerHTML = '&#9658;'; // 播放符號
    } else {
        backgroundMusic.play();
        musicPlayer.innerHTML = '&#10074;&#10074;'; // 暫停符號
    }
    isPlaying = !isPlaying;
});


