
var obj = {
    init: function () {
        this.wrap = $('.wrap');
        this.len = 10;
        this.listLi = $('.list');
        this.photosUl = $('.photos');
        this.nowIndex = 0;
        this.createDom();
    },
    createDom: function () {
        var str = '';
        for (var i = 1; i <= this.len; i++) {
            var oLi = $('<li></li>');
            str += '<li><img src = "./images/' + i + '.jpg" alt=""></li>';
            this.listLi.append(oLi);
        }
        this.photosUl.html(str);
        this.picLi = $('.photos li');
        this.listLi = $('.list li');
        this.change(0);
        this.bindEvent();        
    },
    change: function (index) {
        var len = this.len;
        var picLi = this.picLi;
        var listLi = this.listLi;
        for (var i = 0; i < len; i++) {
            i % 2 == 0 ? d = 1 : d = -1;
            var deg = parseInt(Math.random() * 360);
            var z = parseInt(Math.random() * 100);
            h = parseInt(Math.random() * 400);
            w = parseInt(Math.random() * 600);
            parseInt(Math.random() * 10) % 2 == 0 ? p = 1 : p = -1;
            $(picLi[i]).css({
                'transform': 'rotateZ(' + d * (360 - deg) + 'deg) translateZ(-' + z + 'px)',
            })
            $(picLi[i]).on('transitionend', (function (i) {
                $(picLi[i]).animate({
                    'z-index': 0,
                    'top': p * h / 1.2 + 'px',
                    'left': p * w / 1.2 + 'px'
                }, '1500', 'swing')
            })(i));
            $(listLi[i]).css({
                'transform': 'scale(' + 1 + ')',
            })
        }
        $(picLi[index]).animate({
            top: 0 + 'px',
            left: 0 + 'px',
        }, 10, function () {
            $(picLi[index]).css({
                'transform': 'rotateZ(' + 0 + 'deg) translateZ(' + 10 + 'px)',
                'z-index': 1000,
            })
        })
        $(listLi[index]).css({
            'transform': 'scale(' + 2 + ')',
        })
    },
    changeIndex: function (index) {
        if (this.nowIndex != index) {
            this.nowIndex = index;
            this.change(index);
        }
    },
    bindEvent: function () {
        var self = this;
        this.picLi.on('click', function () {
            self.changeIndex($(this).index());
        });
        this.listLi.on('click', function () {
            self.changeIndex($(this).index());
        })
    },
}

obj.init();