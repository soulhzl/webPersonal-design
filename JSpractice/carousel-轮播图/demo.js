(function ($) {
    function slider(ele, option) {
        this.default = {
            curDisplay: 0,
            autoPlay: false,
            interval: 3000
        }
        this.opts = $.extend({}, this.default, option);
        this.wrap = ele;
        this.curDisplay = this.opts.curDisplay;
        this.autoPlay = this.opts.autoPlay;
        this.nowIndex = this.opts.curDisplay;
        this.interval = this.opts.interval;
        this.timer = null;
        this.$img = this.wrap.find('img');
        this.imgLen = this.$img.length;
        this.switch = true;
        this.init();
    }
    slider.prototype.init = function () {
        var self = this;
        self.initalCarousel();
        self.bindEvent();
    };
    slider.prototype.initalCarousel = function () {
        var self = this;
        var hLen = Math.floor(self.imgLen / 2);
        var lNum, rNum;
        for (var i = 0; i < hLen; i++) {
            lNum = self.curDisplay - i - 1;
            self.$img.eq(lNum).css({
                transform: 'translateX(' + (-150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)'
            })
            rNum = self.curDisplay + i + 1;
            if (rNum > self.imgLen - 1) {
                rNum -= this.imgLen;
            }
            self.$img.eq(rNum).css({
                transform: 'translateX(' + (150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(-30deg)'
            });
            this.$img.removeClass('on');
        }
        self.$img.eq(self.curDisplay).css({
            transform: 'translateZ(300px)'
        }).addClass('on');
        this.wrap.on('transitionend', function () {
            self.switch = true;
        })
    };
    slider.prototype.bindEvent = function () {
        var self = this;
        self.$img.on('click', function (e) {
            if (self.switch && !$(this).hasClass('on')) {
                self.switch = false;
                self.nowIndex = $(this).index();
                self.moving(self.nowIndex);
            }
        }).hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.timer = setInterval(function () {
                self.play();
            }, self.interval);
        });
        this.timer = setInterval(function () {
            self.play();
        }, this.interval);
    }
    slider.prototype.play = function () {
        if (this.autoPlay) {
            if (this.nowIndex == this.imgLen - 1) {
                this.nowIndex = 0;
            } else {
                this.nowIndex++;
            }
            this.moving(this.nowIndex);
        }
    };
    slider.prototype.moving = function (index) {
        this.curDisplay = index;
        this.initalCarousel();
    }
    $.fn.extend({
        slider: function (options) {
            new slider(this, options);
        }
    })
})(jQuery)