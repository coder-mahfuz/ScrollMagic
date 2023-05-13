const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');


const section = document.querySelector('section');
const end = section.querySelector('h1');


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();


//Scenes
const scene = new ScrollMagic.Scene({
    duration: video.duration * 1000, // Set the scene duration to match the video duration in milliseconds
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000; // Normalize scrollPos to match video currentTime units (seconds)
});

setInterval(() => { // Update video currentTime every 33 milliseconds
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 33.3);

// //Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
