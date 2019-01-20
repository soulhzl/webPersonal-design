
function bindEvent(){
    // 点击盒子
    $('.boxBottom').on('click',function(){
        // 盒子添加类名   在这个类名下盒子开始抖动
        $('.box').addClass('shake');
        // 播放音频
        $('audio')[0].play();
        // 延迟1s盒子飞走  wrapper添加show类名，铃铛显示，字体显示同时字体摇晃
        setTimeout(function(){
            $('.box').removeClass('shake');
            $('.box').addClass('fly');
            $('.wrapper').addClass('show');
            // init函数下 随机出现雪花
            init();
        },1000);
    })
}

bindEvent();


function init() {
    // 生成一百个雪花
    for (var i = 0; i < 100; i++) {
        // 每一个createSnow函数返回一个雪花div插入到 wrapper中
        $('.wrapper').append(createSnow());
    }
}

// 随机数功能函数
function random(low, high) {

    // 返回一个随机数
    return low + Math.floor(Math.random() * (high - low));
}


function createSnow() {

    // 随机选中雪花样式
    var p = Math.random() > 0.5 ? 1 : 2;
    // 雪花图片外包裹div
    var snow = $('<div class="snow"><img src="./img/snow' + p + '.png"></div>');

    // 设置雪花样式   规定下落时间  和下落延迟时间
    snow.css({
        'left': random(0, 1500) + 'px',
        'animationDelay': random(0, 5) + 's',
        'animationDuration': random(4, 10) + 's',
    });

    // 返回一个包裹着雪花的div
    return snow;
}