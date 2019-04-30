var arr = [0,1,2,3,4,5,6,7,8,9];
for(var i = 65; i < 122; i++) {
    if(i > 90 && i < 97) {
        continue;
    }
    arr.push(String.fromCharCode(i));
}

var canvasStr, value;

function createCanvas() {
    canvasStr = '';
    value = '';
    for(var i = 0; i < 6; i++) {
        var a = arr[Math.floor(Math.random() * arr.length)];
        canvasStr += a + ' ';
        value += a;
    }
    // $('.imageBox').html('<canvas id="canvasCaptcha" width=300 height=80></canvas>');
    var canvas = document.getElementById('canvasCaptcha'),
        ctx = canvas.getContext('2d'),
        x = canvas.width / 2,
        oImg = new Image();
    oImg.src = './images/bg.jpg';

    oImg.onload = function () {
        var pattern = ctx.createPattern(oImg,'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ccc';
        ctx.font = '46px Roboto Slab';
        ctx.setTransform (1, -0.12, 0.2, 1, 0, 12);
        ctx.fillText(canvasStr, x, 60);
    }
}
createCanvas();

function captcha(inputValue) {
    if(value == inputValue) {
        return true;
    }else {
        return false;
    }
}

function showResult() {
    var inputValue = $('.inputCaptcha').val();
    if(inputValue == '' || inputValue == null || inputValue == 'undefined') {
        $('.errorText').css({display:'inline-block'}).text('请输入验证码');
        $('.captchaIcon').css({display:'inline-block',backgroundImage: 'url("./images/false.png")'})
    }else {
        var result = captcha(inputValue);
        if(result == false) {
            $('.errorText').css({display:'inline-block'}).text('验证码错误，请重新输入');
            $('.captchaIcon').css({display:'inline-block',backgroundImage: 'url("./images/false.png")'});
            createCanvas();
        }else {
            $('.captchaIcon').css({display:'inline-block',backgroundImage: 'url("./images/true.png")'});
            createCanvas();
        }
    }
}

$('.submit').click(showResult);
$('.refresh').click(createCanvas);
$('.inputCaptcha').focus(function () {
    $('.errorText').add($('.captchaIcon')).fadeOut(100);
})

