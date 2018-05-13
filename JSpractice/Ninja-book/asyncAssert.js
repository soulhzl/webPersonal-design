/* 测试组 */
(function(){
	let queue = [], paused = false, results;
	
	this.test = function(name, fn){
		queue.push(function(){
			results = document.getElementById('test');
			results = assert(true, name).appendChild(document.createElement('ul'));
			fn();
		});
		runTest();
	};

	this.pause = function(){
		paused = true;
	};

	this.resume = function(){
		paused = false;
		setTimeout(runTest, 1);
	};

	function runTest(){
		if (!paused && queue.length) {
			queue.shift()();
			if (!paused) {
				resume();
			}
		}
	}

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
})();