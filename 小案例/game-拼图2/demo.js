var btnStart = $('.start');
var imgArea = $('.imgArea');
var imgOrigArr = [];
var imgRanArr = [];
var imgW = parseInt(imgArea.css('width'));
var imgH = parseInt(imgArea.css('height'));
var cellW = imgW / 3;
var cellH = imgH / 3;
var flag = true;
var imgCell;

init();
function init() {
    imgSplit();
    gameState();
}
function imgSplit() {
    imgOrigArr = [];
    imgArea.html('');
    var cell = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            imgOrigArr.push(i * 3 + j);
            cell = $('<div class="imgCell"></div>');
            $(cell).css({
                'width': cellW + 'px',
                'height': cellH + 'px',
                'left': j * cellW + 'px',
                'top': i * cellH + 'px',
                'backgroundPosition': (-j) * cellW + 'px ' + (-i) * cellH + 'px',
            });
            imgArea.append(cell);
        }
    }
    imgCell = $('.imgCell');
}

function gameState() {
    btnStart.on('click', function () {
        if (flag) {
            $(this).text('复原');
            flag = false;
            randomArr();
            cellOrder(imgRanArr);
            imgCell.on('mousedown', function (e) {
                var index1 = $(this).index();
                var cellX = e.pageX - imgCell.eq(index1).offset().left;
                var cellY = e.pageY - imgCell.eq(index1).offset().top;
                $(document).on('mousemove', function (e2) {
                    imgCell.eq(index1).css({
                        'z-index': '40',
                        'left': e2.pageX - cellX - imgArea.offset().left + 'px',
                        'top': e2.pageY - cellY - imgArea.offset().top + 'px',
                    });
                }).on('mouseup', function (e3) {
                    var left = e3.pageX - imgArea.offset().left;
                    var top = e3.pageY - imgArea.offset().top;
                    var index2 = changeIndex(left, top, index1);
                    if (index1 == index2) {
                        cellReturn(index1);
                    } else {
                        cellChange(index1, index2);
                    }
                    $(document).off('mousemove').off('mouseup');
                })
            })
        } else {
            $(this).text('开始');
            flag = true;
            cellOrder(imgOrigArr);
            imgCell.off('mouseover').off('mousedown').off('mouseup');
        }
    })
}
function randomArr() {
    imgRanArr = [];
    var len = imgOrigArr.length;
    var order;
    for (var i = 0; i < len; i++) {
        order = Math.floor(Math.random() * len)
        if (imgRanArr.length > 0) {
            while ($.inArray(order, imgRanArr) > -1) {
                order = Math.floor(Math.random() * len);
            }
        }
        imgRanArr.push(order);
    }
    return;
}
// i * 3 + j
function cellOrder(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        imgCell.eq(i).animate({
            'left': arr[i] % 3 * cellW + 'px',
            'top': Math.floor(arr[i] / 3) * cellH + 'px'
        }, 400)
    }
}

function changeIndex(x, y, index) {
    if (x < 0 || x > imgW || y < 0 || y > imgH) {
        return index;
    }
    var row = Math.floor(y / cellH),
        col = Math.floor(x / cellW),
        l = row * 3 + col;
    var i = 0,
        len = imgRanArr.length;
    while ((i < len) && (imgRanArr[i] !== l)) {
        i++;
    }
    return i;
}

function cellReturn(index) {
    var row = Math.floor(imgRanArr[index] / 3);
    var col = imgRanArr[index] % 3;
    imgCell.eq(index).animate({
        'top': row * cellH + 'px',
        'left': col * cellW + 'px',
    }, 400, function () {
        $(this).css('z-index', '10');
    })
}

function cellChange(from, to) {
    var rowFrom = Math.floor(imgRanArr[from] / 3),
        colFrom = imgRanArr[from] % 3,
        rowTo = Math.floor(imgRanArr[to] / 3),
        colTo = imgRanArr[to] % 3,
        temp = imgRanArr[from];
    imgCell.eq(from).animate({
        'top': rowTo * cellH + 'px',
        'left': colTo * cellW + 'px',
    }, 400, function () {
        $(this).css('z-index', '10');
    });
    imgCell.eq(to).animate({
        'top': rowFrom * cellH + 'px',
        'left': colFrom * cellW + 'px',
    }, 400, function () {
        $(this).css('z-index', '10');
        imgRanArr[from] = imgRanArr[to];
        imgRanArr[to] = temp;
        check();
    })
}
function check(){
    if (imgOrigArr.toString() == imgRanArr.toString()) {
        alert('right');
        flag = true;
        btnStart.text('开始');
    }
}
