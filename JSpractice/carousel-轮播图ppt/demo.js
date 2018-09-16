var ppt = {
    $wrap: $('.wrapper'),
    nowIndex: 0,
    lastIndex: undefined,
    $slider: $('.slider'),
    flag: true,
    timer: undefined,
    init: function () {
        this.bindEvent();
        this.sliderAuto();  //一进来就出发自动播放
    },
    bindEvent: function () {
        //点击获得index
        //left --> index--   right -->index++  li--->index()
        //点击之后要加锁判断
        var self = this;   //回调函数中this传递
        $('li').add($('.left-btn')).add($('.right-btn')).on('click', function () {
            if ($(this).attr('class') == 'left-btn') {
                self.tool('left');
            } else if ($(this).attr('class') == 'right-btn') {
                self.tool('right');
            } else {
                self.tool($(this).index());
            }
        });
        $('.left-btn').add($('.right-btn')).hover(function () {
            $(this).css({
                transform: 'rotate(360deg)',
            })
        }, function () {
            $(this).css({
                transform: 'rotate(0deg)',
            })
        })
        this.$slider.on('leave', function () {               //给所有slider绑定事件
            $(this).fadeOut(300).find(($('img'))).animate({ width: '0%' })
            //$(this)表示当前谁触发了事件 （这里的this不是ppt而是 自定义触发时调用的对象）
        })
        this.$slider.on('come', function () {                  //给所有slider绑定事件
            $(this).fadeIn(300).find(($('img'))).delay(300).animate({
                width: '40%'
            }, 300, 'linear', function () {
                self.flag = true;
                self.sliderAuto(); //自己调用自动播放      
            })
        })
    },
    getIndex: function (dir) {
        this.lastIndex = this.nowIndex;
        if (dir == 'left') {
            this.nowIndex = this.nowIndex == 0 ? 3 : this.nowIndex - 1;
        } else if (dir == 'right') {
            this.nowIndex = this.nowIndex == 3 ? 0 : this.nowIndex + 1;
        } else {
            this.nowIndex = dir;
        }
    },
    changeActive: function () {
        $('.active').removeClass('active');
        $('li').eq(this.nowIndex).addClass('active');
    },
    tool: function (text) {
        var self = this;   //接收上一个作用域的this
        if (self.flag) {
            self.getIndex(text);
            if (self.lastIndex !== self.nowIndex) {   //禁止自动播放时点击自己的索引
                self.changeActive(self.nowIndex);
                self.$slider.eq(self.lastIndex).trigger('leave');
                self.$slider.eq(self.nowIndex).delay(300).trigger('come');
                self.flag = false;
            }
        }
    },
    sliderAuto: function () {
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
            self.tool('right');
        }, 3000)
    },
}
ppt.init();