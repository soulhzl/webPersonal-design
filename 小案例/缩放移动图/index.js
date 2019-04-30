window.onload = function(){
	let oDiv = document.querySelector('.aboutImg');
	let up = document.querySelector('.up');

	let upH = up.offsetHeight;
	let upW = up.offsetWidth;
	let upSrc = up.dataset.src;
	let dir = [
	{name : 'top', value : upH/2},
	{name : 'left', value : -upW},
	{name : 'left', value : upW/2},
	{name : 'top', value : -upH}
	];
	let fragment = document.createDocumentFragment();
	for (let i = 0; i < 4; i++) {
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

	let aImg = document.getElementsByTagName('img');
	oDiv.onmouseover = function(){
		for (let i = 0, len = aImg.length; i < 4; i++) {
			aImg[i].style[dir[i].name] = dir[i].value + 'px';
		}
	}

	oDiv.onmouseout = function(){
		for (let i = 0, len = aImg.length; i < 4; i++) {
			aImg[i].style[dir[i].name] = aImg[i]['init' + dir[i].name] + 'px';
		}
	}
}