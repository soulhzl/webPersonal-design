var per = 0;

var timer = setInterval(function () {
    $(".bar").css("width", per + "%");
    per += 1;
    if (per > 100) {
        $(".pageLoading").addClass("complete");
        setTimeout(function () {
            $(".monsterText").html("We are<br>SQUARE<br>MONSTER!");
        }, 3000);
        clearInterval(timer);
    }
}, 30);