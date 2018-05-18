(function(){
	let header = $('#headerMain'),
	arrow = $$(header, '.arrow')[0],
	nav = $$(header, 'ul')[0],
	oLi = $$(nav, 'li'),
	main = $('#main'),
	oUL = $$(main, 'ul')[0],
	oLiList = $$(main, '.liList'),
	about = $$(main, '.aboutImg'),
	asideNav = $('#asideNav');
	asideLi = $$(asideNav, 'li');
	nowIndex = 0;


	init();

	function init(){
		autoHeight();
		resizeHeight();
		arrowPos(nowIndex);
		slideList(nowIndex);
		bind();
		bindScroll();
		bindAbout();
	}

	/* 适配告诉 */
	function autoHeight(){
		let winH = getHeight(),
		bgH = 998 + header.offsetHeight,
		ih = winH > bgH ? bgH : winH;

		main.style.height = ih - header.offsetHeight + 'px'

		for (var i = 0, len = oLiList.length; i < len; i++) {
			oLiList[i].style.height = ih - header.offsetHeight + 'px';
		}
	}

	/* 屏幕大小变化时重置高度 */
	function resizeHeight(){
		window.onresize = function(){
			autoHeight();
		}
	}

	/* 设置指标在LI元素中下方|箭头位置 */
	function arrowPos(index){
		for (let i = 0, len = oLi.length; i < len; i++) {
			let up = $$(oLi[i], '.up')[0];
			up.style.width = '';
		}

		for (var i = 0; i < 4; i++) {
			asideLi[i].className = '';
		}
		asideLi[nowIndex].className = 'active';
		let up = $$(nav, '.up')[index];

		up.style.width = '100%';

		arrow.style.left = oLi[index].offsetLeft + oLi[index].offsetWidth/4 + 'px';
	}

	/* 切换List */
	function slideList(index){
		setCss(oUL, 'transform', 'translateY(' + ( -index * oLiList[index].offsetHeight ) +'px)')
	}

	/* 绑定事件 */
	function bind(){
		for (let i = 0, len = oLi.length; i < len; i++) {
			oLi[i].onclick = asideLi[i].onclick = function(){
				nowIndex = i;
				arrowPos(i);
				slideList(i);
			}
		}
	}

	/* 滚轮事件 */
	function bindScroll(){
		let rDir = false,
		timer = null;
		if (main.addEventListener) {
			main.addEventListener('DOMMouseScroll', function(e){
				let ev = e || window.event;
				toChange(ev);
			}, false);
		}
		main.onmousewheel = function(e){
			let ev = e || window.event;
			toChange(ev);
		}

		/* 按方向切换屏幕 */
		function toChange(e){
			clearTimeout(timer);

			timer = setTimeout(function(){
				if (e.detail) {
					rDir = e.detail > 0 ? false : true;
				}
				if (e.wheelDelta) {
					rDir = e.wheelDelta > 0 ? true : false;
				}

				if (rDir) {
					if (nowIndex != 0) {
						nowIndex--;
					}
				}
				else{
					if (nowIndex != oLiList.length-1) {
						nowIndex++;
					}
				}
				arrowPos(nowIndex);
				slideList(nowIndex);
			}, 200);
			
		}	
	}

	/* 绑定about图片事件 */
	function bindAbout(){
		for (var i = 0, len = about.length; i < len; i++) {
			change(about[i]);
		}

		function change(parent){
			let up = $$(parent, '.up')[0],
			upH = up.offsetHeight,
			upW = up.offsetWidth,
			upSrc = up.dataset.src,
			dir = [
			{name : 'top', value : upH/2},
			{name : 'left', value : -upW},
			{name : 'left', value : upW/2},
			{name : 'top', value : -upH}
			],
			fragment = document.createDocumentFragment();
			for (var i = 0; i < 4; i++) {
				let li = document.createElement('li');
				li.style.width = upW/2 + 'px';
				li.style.height = upH/2 + 'px';
				let img = document.createElement('img');
				img.src = upSrc;
				img.style.left = -(i%2) * upW/2 + 'px';
				img.style.top = -Math.floor(i/2) * upH/2 + 'px';
				img.initleft = -(i%2) * upW/2;
				img.inittop = -Math.floor(i/2) * upH/2;
				li.appendChild(img);
				fragment.appendChild(li);
			}
			up.appendChild(fragment);

			let aImg = $$(up, 'img');
			parent.onmouseover = function(){
				for (var i = 0, len = aImg.length; i < len; i++) {
					aImg[i].style[dir[i].name] = dir[i].value + 'px';
				}
			}

			parent.onmouseout = function(){
				for (var i = 0, len = aImg.length; i < len; i++) {
					aImg[i].style[dir[i].name] = aImg[i]['init' + dir[i].name] + 'px';
				}
			}
		}
	}

	/* 通过ID获取元素 */
	function $(selector){
		if (selector.charAt(0) === '#') {
			return document.getElementById(selector.substring(1));
		}
	}

	/* 通过类名获取元素 */
	function $$(elem, selector){
		if (arguments.length == 1) {
			selector = elem;
			elem = document;
		}
		if (selector.charAt(0) === '.') {
			return elem.getElementsByClassName(selector.substring(1));
		}
		else{
			return elem.getElementsByTagName(selector);
		}
	}

	/* 获取宽度 */
	function getWidth(){
		return window.innerWidth || document.documentElement.clientWidth;
	}

	/* 获取高度 */
	function getHeight(){
		return window.innerHeight || document.documentElement.clientHeight;
	}

	/* 设置CSS属性 */
	function setCss(elem, attr, value){
		elem.style[attr] = value;
		elem.style['webkit' + attr.substring(0, 1).toUpperCase() + attr.substring(1)];
	}
})()