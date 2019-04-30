$(function(){
    var boxDom = $("#boxDom");
   
    var top, right;
   
    var pageWidth = parseInt($(document).width());
    var pageHeight =parseInt($(document).height());
    // var url = "item.json";
    //点击按钮
    $("#btn").bind("click",auto);//按钮绑定方法
  
    document.onkeydown = function(){
     if(event.keyCode == 13){//回去回车发送
      auto();
     }
    }
    function auto(){
    //1.获取输入的字符串
    var str = $(".text").val();
    //2.生成一个元素
    var createSpan = $("<span class = 'string' ></span>");
   
    //3.给生成的元素赋值
   
    createSpan.text(str);
   
    //为了页面友好，清空刚刚输入的值
    $(".text").val("");
   
   //生成元素一个随机的位置，为了使每条弹幕都出现在屏幕上不同的位置
    top = Math.floor(Math.random()*pageHeight);
   
   
   createSpan.css({"top":top, "right": -400, "color": getRandomColor()});
    boxDom.append(createSpan);
   
    //4.设置元素的动画效果，animate(css样式值，时间， 执行完动画调用的方法)
   
    //页面上有N个span，只让最后一个动起来
    var spandom = $("#boxDom>span:last-child");//找到最后一个span
    spandom.animate({"right":pageWidth+300},10000,function(){
     //移除元素
     $(this).remove();
   
    });
    }
    //定义一个可以生成随机颜色的方法,可以使每条弹幕的颜色不同
    function getRandomColor(){
     var colorArr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
     var color = "";
     for(var i = 0; i < 6; i++){
      color += colorArr[Math.floor(Math.random()*16)]; 
     }
     return "#"+color;
    }
   
   });