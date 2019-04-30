var totalShop = 0;
var totalLike = 0;

function init(){
    clickBtn();
    mouseHover();
}
init();

function clickBtn(){
    $('button').on('click',function(){
        var img = $(this).parent().find('img');
        var btn = $(this).attr('class');
        var flyImg = img.clone().css({
            'opacity':0.6
        });
        $('.wrapper').append(flyImg);
        flyImg.css({
            'z-index':999,
            'border':'3px solid #fff',
            'position':'absolute',
            'height':img.height() + 'px',
            'width':img.width() + 'px',
            'top':img.offset().top + 'px',
            'left': img.offset().left + 'px'
        });
        flyImg.animate({
            'width':'50px',
            'height':'50px',
            'border-radius':'100%'
        },function(){
            var top;
            if(btn == 'shop'){
                top = $('.shop-add').offset().top;
                totalShop ++;
            }else {
                top = $('.like-add').offset().top;
                totalLike ++;
            }
            flyImg.animate({
                'top':top,
                'left':$('.rightBox').offset().left,
                'height':0,
                'width':0
            },1500,function(){
                flyImg.remove();
                $('.shop-add').html(totalShop);
                $('.like-add').html(totalLike);
            })
        })
    })
}
function mouseHover(){
    $('.rightBox li').on('mouseenter',function(){
        $(this).find('.leftBox').animate({
            'left':'-90px'
        }).addClass('show');
    }).on('mouseleave',function(){
        $(this).find('.leftBox').animate({
            'left':'-121px'
        }).removeClass('show');
    })
}