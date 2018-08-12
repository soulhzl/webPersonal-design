/**
 * drawing broad     nan.xue
 * canvas 
 * api
 * 
 */

var lineObj = {
    cavs: $('.cavs'),
    context: $('.cavs').get(0).getContext('2d'),
    colorChange: $('#colorChange'),
    cleanBoard: $('#colorChange'),
    eraser: $('#eraser'),
    rescind: $('#rescind'),
    lineRuler: $('#lineRuler'),
    imgArr:[],
    bool: false,
    init: function () {
        // console.log(this.context)
        this.context.lineCap ='round';//线条起始和结尾样式
        this.context.lineJoin ='round';//转弯
        this.draw();
        this.clickBtn();
    },
    draw: function () {
        var self = this,
            cavs = this.cavs;
        var c_x = cavs.offset().left;
        var c_y = cavs.offset().top;
        
        cavs.mousedown(function (e) {
            self.bool = true
            var m_x = e.pageX - c_x;
            var m_y = e.pageY - c_y;
            self.context.beginPath();
            self.context.moveTo(m_x, m_y);
            console.log(m_x,m_y)
            // cavs.css('cursor', 'pointer');

            cavs.mousemove(function (e) {
                if (self.bool) {
                    self.context.lineTo(e.pageX - c_x, e.pageY - c_x);
                    self.context.stroke();
                }
            });
            cavs.mouseup(function () {
                self.context.closePath();
                self.bool = false
                // cavs.css('cursor', 'none');
            });
            cavs.mouseleave(function () {
                self.bool = false
                self.context.closePath();
                // cavs.css('cursor', 'none')如果用事件绑定的话 要记得用移除事件
            });

            var imgData = self.context.getImageData(0,0,self.cavs[0].width,self.cavs[0].height);
            self.imgArr.push(imgData);
            console.log(self.imgArr);
        });
    },
    clickBtn:function(){
        var self = this;
        $('.btn-list').on('click',function(e){
            e = e||window.event;
            switch(e.target.id){
                case 'cleanBoard':
                self.context.clearRect(0,0,self.cavs[0].width,self.cavs[0].height);
                break
                case 'eraser':
                self.context.strokeStyle = '#FFF';
                break
                case 'rescind':
                if(self.imgArr.length > 0){
                    self.context.putImageData(self.imgArr.pop(),0,0)
                }   
                break
            }
        })
        this.colorChange.change(function(event) {//当颜色改变时触发
			self.context.strokeStyle = $(this).val();//改变画笔颜色
		});
		this.lineRuler.change(function(event) {
			self.context.lineWidth = $(this).val();
		});

    }
}
lineObj.init();