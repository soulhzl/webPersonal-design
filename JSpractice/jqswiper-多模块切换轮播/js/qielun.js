$(function(){
    var menu = $(".list-left ul li");
    var list = $(".right-main ul li");
    var indexAll=0;//索引从0开始
    var len=$(".list-left ul li").length;
    var i = 0;
    var over = false;
    function autoPlay(){
        indexAll++;
        if(indexAll>len-1){ 
            indexAll=0; //返回第一张
        }
        menu.eq(indexAll).addClass("list_cutLi").siblings().removeClass("list_cutLi");//左模块选中添加样式
        //animate()自定义动画 通过CSS样式将一个状态改变为另一个状态
        //animate(styles,speed,easing,callback)
       var leftVal = -(indexAll*268)+'px'; 
        $(".right-main").animate({left:leftVal},500);
        if (over) {
            list.eq(i).fadeIn(1000).siblings().show();
            over = false;
        }
    }; 
    var timerId = setInterval(autoPlay,1000);
    menu.mouseover(function(){
        clearInterval(timerId);
        i=$(this).index();//获取当前标签个数
        $(this).addClass("list_cutLi").siblings().removeClass("list_cutLi");//siblings返回被选元素的所有同级元素
        list.eq(i).fadeIn(1000).siblings().hide();
        $(".right-main").animate({left:'0px'},500);
        over = true;
    }); 

    menu.mouseout(function(){
        timerId = setInterval(autoPlay,1000);
    });
});