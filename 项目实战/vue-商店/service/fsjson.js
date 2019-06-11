const fs = require('fs')

fs.readFile('./data_json/goods.json', 'utf8', (err, data) => {
	let newData = JSON.parse(data)
	let i = 0
	let pushData = []
	newData.RECORDS.map((val, index) => {
		if (val.IMAGE1 != null) {
			i++
			pushData.push(val)
		}
	})

	fs.writeFile('./data_json/newGoods.json', JSON.stringify(pushData), (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log('写入成功')
		}
	})
})