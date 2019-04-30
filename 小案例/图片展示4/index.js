function Index(col, row) {
    this.dom = {
        wrapUl: $('#wrap-ul'),
    };
    this.num = {
        totalWidth: $('#wrap-ul').width(),
        totalHeight: $('#wrap-ul').height(),
        collums: col,
        rows: row,
    }
    this.init();
}
Index.prototype.init = function () {
    this.createDom();
}
Index.prototype.createDom = function () {
    var wrap = this.dom.wrapUl,
        r = this.num.rows,
        c = this.num.collums,
        w = wrap.width() / r,
        h = wrap.height() / c;
    this.num.width = w;
    this.num.height = h;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            $('<li><div class="box"><img src = ""></div></li>').width(w).height(h)
                .css({
                    'left': w * j + 'px',
                    'top': h * i + 'px',
                    'transform': 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg)' +
                        'translateX(' + (30 * j - 60) + 'px)' +
                        'translateY(' + (30 * i - 60) + 'px)' + 'translateZ(-' + Math.random() * 500 + 'px)'
                })
                .find('img').attr('src', 'img/pic' + (i * c + j) + '.jpg')
                .end()
                .appendTo(wrap);
        }
    }
    this.bindEvent();
}
Index.prototype.bindEvent = function () {
    var change = true,
        wrap = this.dom.wrapUl,
        height = this.num.height,
        width = this.num.width,
        totalWidth = this.num.totalWidth,
        totalHeight = this.num.totalHeight,
        col = this.num.collums;
    wrap.find('li').on('click', function () {
        if (change) {
            var bgImg = $(this).find('img');
            var bgLeft = 0;
            var bgTop = 0;
            $('#wrap-ul li').each(function (index) {
                var $this = $(this);
                $this.delay(10 * index).animate({ 'opacity': 0 }, 200, function () {
                    $this.css({
                        'transform': 'rotate(0deg)' + 'translateX(0)' + 'translateY(0)'
                    });
                    $this.find('div').css({
                        'transform': 'scale(1)',
                    });
                    $this.find('img').attr('src', bgImg.attr('src')).css({
                        'position': 'absolute',
                        'height': totalHeight + 'px',
                        'width': totalWidth + 'px',
                        'left': -bgLeft,
                        'top': -bgTop,
                    });
                    $('ul').css({
                        'overflow': 'hidden'
                    })
                    bgLeft += width;
                    if (bgLeft >= totalWidth) {
                        bgTop += height;
                        bgLeft = 0;
                    }
                    $this.animate({ 'opacity': 1 }, 200);
                })
            });
            change = false;
        } else {
            $('#wrap-ul li').each(function (index) {
                var c = index % col;
                var r = parseInt(index / col);
                var $this = $(this);
                $(this).animate({
                    'opacity': 0,
                }, 200, function () {
                    $this.find('img').css({
                        'height': 100 + '%',
                        'width': 100 + '%',
                        'left': 0 + 'px',
                        'top': 0 + 'px',
                        'position': 'absolute',
                    })
                    $this.find('img').attr('src', 'img/pic' + index + '.jpg')

                    $this.css({
                        'transform': 'rotate(' + (Math.random() * 40 - 20) + 'deg)' +
                            'translateX(' + (30 * c - 60) + 'px)' +
                            'translateY(' + (30 * r - 60) + 'px)' + 'translateZ(-' + Math.random() * 500 + 'px)',
                            'height':30 + 'px',
                            'width':40 + 'px',
                    });
                    $this.find('div').css({
                        'transform': 'scale(0.9)'
                    });
                    $('ul').css({
                        'overflow': 'visible'
                    })

                    $this.animate({
                        "opacity": 1,
                        'height':height +'px',
                        'width': width + 'px',
                    }, 1200);

                })
            })
            change = true;
        }
    })
}
new Index(5, 5);
