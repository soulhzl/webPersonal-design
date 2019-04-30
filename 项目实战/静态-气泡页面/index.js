/* global $, Typed */
(function () {
    const $canvas = $('#main');
    const $body = $(document.body);
    const $logo = $('#logo');
    const $bgMusic = $('#bg-music');
    // const $story = $('#story');
    // const $storyTitle = $story.find('.story-title');
    // const $storyCnt = $story.find('.story-content');
    const mainCanvas = document.querySelector('#main');
    // const bubbleImg = document.querySelector('#bubble');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const ctx = mainCanvas.getContext('2d');
    const bubbles = window.bubbles;
    const bubbleImg = window.bubbleImg;
    const config = {
        typeFlag: false,
        curLoop: 0,
        curLoopBubble: 0,
        loopLen: bubbles.length,
    };
    const BUBBLE_MARGIN = 9;

    mainCanvas.width = windowWidth;
    mainCanvas.height = windowHeight;
    $canvas.show();

    // const touchBubble = (x, y) => {
    //     bubbles.some((item) => {
    //         if (x >= item.x - item.width && x <= item.x + item.width * 2
    //             && y >= item.y - item.height && y <= item.y + item.height * 2) {
    //             $canvas.css({
    //                 'background': `url(./img/${item.bg}.jpg) center top no-repeat`,
    //                 'background-size': 'cover',
    //                 'transition': 'background .5s',
    //             });
    //             $storyTitle.html(item.title);
    //             $storyCnt.html(item.content);

    //             return true;
    //         }

    //         return false;
    //     });
    // };

    function initBubble() {
        bubbles.forEach((item) => {
            const img = new Image();
            const smallImg = new Image();
            img.src = `./img/story/${item.bg}.jpg`;
            smallImg.src = `./img/story/min/${item.bg}.png`;

            item.img = smallImg;
        });
    }

    function initAudio() {
        document.addEventListener('WeixinJSBridgeReady', () => {
            $bgMusic[0].play();
        });

        document.addEventListener('touchstart', () => {
            $bgMusic[0].play();
        });
    }

    function renderStory(bubble) {
        // 正在打字 或者 当前循环已经播放过该气泡
        if (config.typeFlag || bubble.times !== config.curLoop) {
            return;
        }

        // 一次循环一个气泡只播放一次
        config.typeFlag = true;
        config.curLoopBubble++;
        bubble.times++;

        if (config.curLoopBubble === config.loopLen) {
            config.curLoopBubble = 0;
            config.curLoop++;
        }

        // 隐藏选择logo
        $logo.hide();

        // 更换场景
        $canvas.css({
            background: `url(./img/story/${bubble.bg}.jpg) center top no-repeat`,
            'background-size': 'cover',
            transition: 'background 1s',
            opactiy: 1,
        });

        // 打印故事
        const typed = new Typed('#story', {
            strings: [
                '',
                `<p class="story-title">${bubble.title}</p><p class="story-content">${bubble.content}</p>`,
            ],
            typeSpeed: 80,
            backSpeed: 30,
            showCursor: false,
            onComplete: () => {
                config.typeFlag = false;
            },
        });

        $(document).trigger('animation', bubble.animate);
    }

    // function bindEvent() {
        // $canvas.on('touchstart', (event) => {
        //     const touch = event.touches[0];

        //     touchBubble(touch.clientX, touch.clientY);
        // });
    // }

    function isOverflow(bubble) {
        if (bubble.y < -bubble.height) {
            bubble.x = bubble.initialX;
            bubble.y = (windowHeight * 1.5) - bubble.y;
        } else if (bubble.y < 0 && bubble.y - bubble.vy >= 0) {
            renderStory(bubble);
        }
    }

    function renderBubble() {
        const margin = 2 * BUBBLE_MARGIN;

        bubbles.forEach((item) => {
            if (item.y <= item.maxY && item.y >= item.minY) {
                ctx.drawImage(item.img, item.x + BUBBLE_MARGIN, item.y + BUBBLE_MARGIN,
                    item.width - margin, item.height - margin);

                ctx.drawImage(bubbleImg, item.x, item.y, item.width, item.height);
            }
            item.y += item.vy;

            isOverflow(item);
        });
    }

    initBubble();
    initAudio();
    // bindEvent();

    (function animate() {
        ctx.clearRect(0, 0, windowWidth, windowHeight);

        renderBubble();
        requestAnimationFrame(animate);
    }());
}());
