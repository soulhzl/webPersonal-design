var move = true;
$(".btn-left").click(function(){
	if (move) {
		move = false;
		tab(true);
	}
	
});

$(".btn-right").click(function(){
	if (move) {
		move = false;
		tab(false);
	}
});

function tab(dir){
	var arrTop = [],
	arrLeft = [],
	arrTran = [],
	arrW = [],
	arrH = [],
	arrZ = [],
	n;

	$(".banner ul li").each(function(i){
		arrTop[i] = $(this).css("top");
		arrLeft[i] = $(this).css("left");
		arrTran[i] = $(this).css("transform");
		arrW[i] = $(this).css("width");
		arrH[i] = $(this).css("height");
		arrZ[i] = $(this).css("z-index");
	});

	$(".banner ul li").each(function(i){
		if (!dir) {
			n = i + 1;
			if (n > 7) {
				n = 0;
			}
		}
		else{
			n = i - 1;
			if (n < 0) {
				n = 7;
			}
		}

		$(this).css({
			"z-index" : arrZ[n],
			"transform" : arrTran[n]
		});

		$(this).animate({
			"width" : arrW[n],
			"height" : arrH[n],
			"top" : arrTop[n],
			"left" : arrLeft[n]
		}, 500, function(){
			move = true;
		});
	});

}