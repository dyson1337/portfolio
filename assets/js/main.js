const d = document;

const preloader = d.querySelector('.preloader');
const pcbutton = d.querySelector('.preloader-content_button');
const video_bg = d.querySelector('.main_container_video video');

let sI;

pcbutton.addEventListener('click', () => {
    sI = setInterval(preloaderAnim, 10);
    pcbutton.classList.add('clicked');
});

let j = 1;
video_bg.pause();
function preloaderAnim() {
    j -= .01;
    preloader.style.opacity = j;
    video_bg.muted = true;
    if (j <= 0) {
        clearInterval(sI);
        window.setTimeout(() => {
            preloader.removeAttribute('style');
        }, 50);
        window.setTimeout(() => {
            preloader.style.display = 'none';
        }, 60);
    };
    if (j <= 1) {
        video_bg.muted = false;
        video_bg.play();
    };
};
