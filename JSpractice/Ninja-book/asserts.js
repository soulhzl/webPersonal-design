/* 测试组 */
(function(){
	let results;
	this.assert = function(value, desc){
		let oLi = document.createElement('li');
		oLi.className = value ? 'pass' : 'fail';
		oLi.appendChild(document.createTextNode(desc));
		results.appendChild(oLi);
		if (!value) {
			oLi.parentNode.parentNode.className = 'fail';
		}

		return oLi;
	};
	
	this.test = function(name, fn){
		results = document.getElementById('test');
		results = assert(true, name).appendChild(document.createElement('ul'));
		fn();
	};
})();