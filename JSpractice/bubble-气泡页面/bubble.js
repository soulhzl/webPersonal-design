
(function () {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const random = (min, max) => {
        return min + (Math.random() * (max - min));
    };

    const bubbles = [{
        x: 50,
        y: windowHeight + 50,
        vx: 3,
        vy: -2.5,
        width: 90,
        height: 90,
        animate: 'leaf',
        bg: 'leaf',
        title: '2018/10/11 稻城亚丁',
        content: '我们一起，看落叶纷飞。',
        times: 0,
    }, {
        x: 240,
        y: windowHeight + 50,
        vx: 3,
        vy: -2,
        width: 70,
        height: 70,
        animate: 'shuttle',
        bg: 'sky',
        title: '2017/11/11 火星',
        content: '我要变成超人带你飞。',
        times: 0,
    }, {
        x: 100,
        y: windowHeight + 50,
        vx: 1.5,
        vy: -1.8,
        width: 50,
        height: 50,
        animate: 'station',
        bg: 'station',
        title: '2018/12/11 天空之境',
        content: '你就留在这里不要走，我去给你买个橘子。',
        times: 0,
    }];

    bubbles.forEach((item) => {
        if (item.manual) {
            item.initialX = item.x;
            item.initialY = item.y;
            item.minY = -item.height;
            item.maxY = windowHeight + item.height;

            return;
        }

        item.width = random(60, 110);
        item.height = item.width;
        item.x = random(10, windowWidth - item.width - 10);
        item.y = random(windowHeight, windowHeight * 1.5);
        item.minY = -item.height;
        item.maxY = windowHeight + item.height;
        item.vy = random(-2.5, -0.5);
        item.initialX = item.x;
        item.initialY = item.y;
    });

    window.bubbles = bubbles;
}());
