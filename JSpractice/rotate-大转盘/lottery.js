(function(win,$){
    var defaultPar = {
        rotateNum: 5,
        body: 'body',
        clickCb: function () {},
        renderCb: function () {}
    }
    console.log(11)
    win.Lottery = Lottery;
    function Lottery(pars){
        this.pars = $.extend(true,{},defaultPar,pars),
        this.isDoing = false;
        this.init();
    }
    Lottery.prototype.init = function(){
        var $this = this;
        $(this.pars.body).on('click', '#button', function () {
            if(!$this.isDoing) {
                $this.isDoing = true;
                $this.pars.clickCb();
            }  
        })
        $(this.pars.body).find('.box').on('transitionend', function () {
            var deg = $($this.pars.body).attr('data-deg');
            $this.pars.renderCb(deg);
            $($this.pars.body).find('.box').css({
                transform: 'rotate(' + deg + 'deg)',
                transition: 'none'
            })
            $this.isDoing = false;
        })
    }
    Lottery.prototype.goRotate = function (deg) {
        // var rotateEnd = this.rotateAll + deg;
        var rotateEnd = this.pars.rotateNum * 360 + deg;
        $(this.pars.body).find('.box').css({
            transform: 'rotate(' + rotateEnd + 'deg)',
            transition: 'all 5s'
        })
        $(this.pars.body).attr('data-deg',deg);
    }
})(window,$)