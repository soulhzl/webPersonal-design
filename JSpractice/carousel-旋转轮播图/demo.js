var oLi = document.getElementsByTagName('li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var btn = document.getElementsByClassName('btn');
var len = oLi.length;
var timer = null;
var sort = [];
var flag = true;
var width = oLi[0].getBoundingClientRect().width;
function init() {
    sort = Array.prototype.slice.call(oLi);
    setUp(sort);
    bindEvent();
    move();
}
init();
function setUp(arr) {
    var len = arr.length;
    var center = Math.floor(arr.length / 2);
    arr[center].style.transform = 'scale(1.2)';
    arr[center].style.zIndex = 4;
    for (var i = 0; i < len; i++) {
        var abs = Math.abs(i - center);
        if (i != center) {
            arr[i].style.zIndex = -abs,
                arr[i].style.transform = 'translateX(' + (i - center) * width / 2 + 'px)';
        };
        flag = true;
    }
}
function bindEvent() {
    if (flag) {
        prev.addEventListener('click', function () {
            flag = false;
            sort.unshift(sort.pop())
            setUp(sort);
        });
        next.addEventListener('click', function () {
            flag = false;
            sort.push(sort.shift());
            setUp(sort)
        });
    }
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('mouseenter', function () {
            clearInterval(timer);
        });
        btn[i].addEventListener('mouseout', function () {
            move();
        });
    }
};
function move() {
    clearInterval(timer);
    timer = setInterval(function () {
        sort.push(sort.shift());
        setUp(sort)
    }, 2000);
}
