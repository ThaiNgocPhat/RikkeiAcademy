const video = document.getElementById('myVideo');
video.controls = false;
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
