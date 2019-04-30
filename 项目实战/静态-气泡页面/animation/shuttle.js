/* global $ */

const cvs = document.createElement('canvas');
cvs.id = 'space';
cvs.className = 'space';
const supermanImg = document.createElement('img');
supermanImg.id = 'superman';
supermanImg.className = 'superman';
supermanImg.src = './img/superman.png';
document.body.appendChild(cvs);
document.body.appendChild(supermanImg);

const canvas = document.getElementById('space');
const c = canvas.getContext('2d');

const numStars = 1900;
const radius = `0.${Math.floor(Math.random() * 9)}`;
const focalLength = canvas.width * 2;
const warp = 0;
let centerX;
let centerY;

let stars = [];
let star;
let i;

let animate = true;
let shuttleStopFlag = true;

function initializeStars() {
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for (i = 0; i < numStars; i++) {
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: `0.${Math.floor(Math.random() * 99)}`,
        };
        stars.push(star);
    }
}

function moveStars() {
    for (i = 0; i < numStars; i++) {
        star = stars[i];
        star.z--;

        if (star.z <= 0) {
            star.z = canvas.width;
        }
    }
}

function drawStars() {
    let pixelX;
    let pixelY;
    let pixelRadius;

    if (canvas.width !== window.innerWidth || canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }

    if (warp === 0) {
        c.fillStyle = 'rgba(0, 10, 20, 1)';
        c.fillRect(0, 0, canvas.width, canvas.height);
    }

    c.fillStyle = `rgba(255, 255, 255, ${radius})`;
    for (i = 0; i < numStars; i++) {
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z);

        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = `rgba(255, 255, 255, ${star.o})`;
    }
}

function executeFrame() {
    if (shuttleStopFlag) {
        return;
    }

    if (animate) {
        window.requestAnimationFrame(executeFrame);
    }

    moveStars();
    drawStars();
}

initializeStars();

$(document).on('shuttle-start', () => {
    shuttleStopFlag = false;

    $('#space').show();
    $('#superman').show();

    executeFrame();
});

$(document).on('shuttle-stop', () => {
    shuttleStopFlag = true;

    $('#space').hide();
    $('#superman').hide();
});
