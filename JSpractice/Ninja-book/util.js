/* log日志记录 */
function log(){
	try{
		console.log.apply(console, arguments);
	}catch(e){
		try{
			opera.postError.apply(opera, arguments);
		}
		catch(e){
			alert(Array.prototype.join.call(arguments, ' '));
		}
	}
}

/* 断言 */
function assert(value, desc){
	let oLi = document.createElement('li');
	oLi.className = value ? 'pass' : 'fail';
	oLi.appendChild(document.createTextNode(desc));
	document.getElementById('test').appendChild(oLi);
}