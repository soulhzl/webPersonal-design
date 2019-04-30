var fs = require('fs');
		var minify = require('html-minifier').minify;
		fs.readFile('./jqprac.html', 'utf8', function (err, data) {
			if (err) {
				throw err;
			}
			fs.writeFile('./test_result.html', minify(data,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true}),function(){
				console.log('success');
			});
		});