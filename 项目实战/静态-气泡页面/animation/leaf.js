/* global $, Typed */
let stopFlag = true;

class LeafScene {
    constructor(el) {
        this.viewport = el;
        this.world = document.createElement('div');
        this.leaves = [];

        this.options = {
            numLeaves: 20,
            wind: {
                magnitude: 1.2,
                maxSpeed: 12,
                duration: 300,
                start: 0,
                speed: 0,
            },
        };

        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;
        this.timer = 0;
    }

    resetLeaf(leaf) {
        leaf.x = (this.width * 2) - ((Math.random() * this.width) * 1.75);
        leaf.y = -10;
        leaf.z = Math.random() * 200;
        if (leaf.x > this.width) {
            leaf.x = this.width + 10;
            leaf.y = (Math.random() * this.height) / 2;
        }

        if (this.timer === 0) {
            leaf.y = Math.random() * this.height;
        }

        leaf.rotation.speed = Math.random() * 10;
        const randomAxis = Math.random();
        if (randomAxis > 0.5) {
            leaf.rotation.axis = 'X';
        } else if (randomAxis > 0.25) {
            leaf.rotation.axis = 'Y';
            leaf.rotation.x = (Math.random() * 180) + 90;
        } else {
            leaf.rotation.axis = 'Z';
            leaf.rotation.x = (Math.random() * 360) - 180;
            leaf.rotation.speed = Math.random() * 3;
        }

        leaf.xSpeedVariation = (Math.random() * 0.8) - 0.4;
        leaf.ySpeed = Math.random() + 1.5;

        return leaf;
    }

    updateLeaf(leaf) {
        const leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

        const xSpeed = leafWindSpeed + leaf.xSpeedVariation;
        leaf.x -= xSpeed;
        leaf.y += leaf.ySpeed;
        leaf.rotation.value += leaf.rotation.speed;

        // eslint-disable-next-line max-len
        let t = `translateX(${leaf.x}px) translateY(${leaf.y}px) translateZ(${leaf.z}px) rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;
        if (leaf.rotation.axis !== 'X') {
            t = `${t} rotateX(${leaf.rotation.x}deg)`;
        }

        leaf.el.style.webkitTransform = t;
        leaf.el.style.MozTransform = t;
        leaf.el.style.oTransform = t;
        leaf.el.style.transform = t;

        if (leaf.x < -10 || leaf.y > this.height + 10) {
            this.resetLeaf(leaf);
        }
    }

    updateWind() {
        if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {
            this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
            this.options.wind.duration = (this.options.wind.magnitude * 50) + ((Math.random() * 20) - 10);
            this.options.wind.start = this.timer;

            const screenHeight = this.height;

            this.options.wind.speed = function (t, y) {
                const a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;

                return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
            };
        }
    }

    init() {
        for (let i = 0; i < this.options.numLeaves; i++) {
            const leaf = {
                el: document.createElement('div'),
                x: 0,
                y: 0,
                z: 0,
                rotation: {
                    axis: 'X',
                    value: 0,
                    speed: 0,
                    x: 0,
                },
                xSpeedVariation: 0,
                ySpeed: 0,
                path: {
                    type: 1,
                    start: 0,
                },
                image: 1,
            };
            this.resetLeaf(leaf);
            this.leaves.push(leaf);
            this.world.appendChild(leaf.el);
        }

        this.world.className = 'leaf-scene';
        this.viewport.appendChild(this.world);

        this.world.style.webkitPerspective = '400px';
        this.world.style.MozPerspective = '400px';
        this.world.style.oPerspective = '400px';
        this.world.style.perspective = '400px';

        window.onresize = () => {
            this.width = this.viewport.offsetWidth;
            this.height = this.viewport.offsetHeight;
        };
    }

    render() {
        if (stopFlag) {
            return;
        }

        this.updateWind();
        for (let i = 0; i < this.leaves.length; i++) {
            this.updateLeaf(this.leaves[i]);
        }

        this.timer++;

        requestAnimationFrame(this.render.bind(this));
    }
}

const ele = document.createElement('div');
ele.className = 'falling-leaves';
document.body.appendChild(ele);

const leafContainer = document.querySelector('.falling-leaves');
const leaves = new LeafScene(leafContainer);

$(document).on('leaf-start', () => {
    stopFlag = false;
    $('.falling-leaves').html('');
    leaves.leaves = [];
    leaves.world = document.createElement('div');

    leaves.init();
    leaves.render();
});

$(document).on('leaf-stop', () => {
    stopFlag = true;

    $('.falling-leaves').html('');
    leaves.leaves = [];
    leaves.world = document.createElement('div');
});
