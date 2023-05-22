const pin = document.querySelector('.pin');
const canvas = document.getElementById('animationCanvas');
const context = canvas.getContext('2d');
const frameCount = 90; // Update this with the total number of frames you have
let currentFrame = 1;
const duration = 3000; // Set the duration (in seconds) of the entire animation

// Initialize ScrollMagic controller
let controller = new ScrollMagic.Controller();

// Create a scene for the trigger area
let scene = new ScrollMagic.Scene({
    duration: duration, // Set the duration to match your animation duration (7 seconds)
    triggerElement: pin,
    triggerHook: 0,
}).setPin(pin).addTo(controller); // This will pin the element for the the scene's duration


let scrollpos = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos;
    console.log(scrollpos);
});

setInterval(() => {
    currentFrame = Math.round((scrollpos / 33)) + 1;
    console.log(`current frame should be ${currentFrame}`);
    if (currentFrame > frameCount) {
        currentFrame = frameCount;
    }
    if (currentFrame < 1) {
        currentFrame = 1;
    }
    animateFrames(currentFrame);
}, 33);

function animateFrames(currentFrame) {
    var image = new Image();
    image.onload = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0);
    };

    image.src = 'frames/frame_' + currentFrame + '.webp';
}

// Resize the canvas to fill the browser window dynamically
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();