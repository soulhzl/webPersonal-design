"use strict";

goog.provide('Blockly.Blockly.blocks');
goog.require('Blockly.Blockly.blocks');

/**
 * 分类
 */
var blocksCategoryName = {
	catControl: '控制',
	catOperation: '运算',
	catVariable: '变量',
	catFunction: '函数',
	catRobot: '动作',
};


/**
 * 颜色
 */
var blocksColor = {
	catControl: "#ffab19",
	catOperation: "#59c059",
	catVariable: '#ff8c1a',
	catFunction: '#ff6680',
	catRobot: '#4c97ff',
}


/********************************************
 *blockly输入类型定义
 ********************************************/
/**
 * 输入类型:整数
 */




Blockly.Blocks['input_number_inline'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldNumber(0, 9), 'NUM');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour("#FFFFFF", "#FFFFFF");
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

/**
 * 输入类型:文本
 */
Blockly.Blocks['input_text_inline'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput(""), "TEXT");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "String");
		this.setColour("#FFFFFF", "#FFFFFF");
		this.setTooltip("Text input for inline input");
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

/**
 * 输入类型:布尔
 */
Blockly.Blocks['input_bool_inline'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput(""), "TEXT");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour("#FFFFFF", "#FFFFFF");
		this.setTooltip("Text input for inline input");
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
}

/**
 * 输入类型:字符串
 */
Blockly.Blocks['input_string_inline'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldString(""), "TEXT");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "String");
		this.setColour("#FFFFFF", "#000000");
		this.setTooltip("Str inline input123");
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

/**
 * 输入类型:滑块(整数)
 */
Blockly.Blocks['input_slider_inline'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldSlider("0", "0", "1", "1", "1", "Value"), 'SLIDER');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, 'Number');
		this.setColour("#FFFFFF", "#FFFFFF");
		this.setTooltip("Slider input for inline input");
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

/********************catControl************************/

Blockly.Blocks['esp32_begin'] = {
	init: function() {

		this.appendDummyInput()
			.appendField('当设备启动');
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl'], "#FFFFFF");
		this.setHelpUrl('');
	},
};

Blockly.Blocks.BEGIN_NAME = "esp32_begin"; //启动块的名称

function isDisplayBlock(block) {
	var tempBlock = block;
	var legal = false;
	do {
		//块包含在其实块或者函数中
		if ((tempBlock.type == Blockly.Blocks.BEGIN_NAME || tempBlock.type == 'procedures_defnoreturn')) {
			legal = true;
			break;
		} else if (tempBlock.getInheritedDisabled()) //如果当前块的父块显示 则当前块也显示,时间优化
		{
			legal = true;
			break;
		}

		tempBlock = tempBlock.getParent();
	}
	while (tempBlock);
	if (legal) {
		if (!block.isInFlyout) {
			block.setDisabled(false);
		}
	} else {
		if (!block.isInFlyout) {
			block.setDisabled(true);
		}
	}
};

Blockly.Blocks['sleep'] = {
	init: function() {
		this.appendValueInput("TIME")
			.setCheck("Number")
			.appendField('等待');
		this.appendDummyInput()
			.appendField('毫秒')
			.appendField(new Blockly.FieldImage("./img/control_wait.svg", 40, 40));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl'], "#FFFFFF");
		this.setTooltip('Sleep');
		this.setHelpUrl('');
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['while_true'] = {
	init: function() {
		this.appendDummyInput()
			.appendField('重复执行');
		this.appendStatementInput('DO')
			.appendField('');
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldImage("./img/control_loop.svg", 24, 24));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl']);
		this.setTooltip('Forever loop.');
		this.setHelpUrl('');
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['for'] = {
	init: function() {
		this.appendDummyInput()
			.appendField('重复执行');
		this.appendValueInput('COUNT')
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('次');
		this.appendStatementInput('DO')
			.appendField('');
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldImage("./img/control_loop.svg", 24, 24));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl']);
		this.setTooltip('');
		this.setHelpUrl('');
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['break'] = {
	init: function() {
		this.appendDummyInput()
			.appendField('结束重复执行');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl']);
		this.setTooltip('breaks out of a loop');
		this.setHelpUrl('');
	},
	onchange: function() {
		var legal = false;
		var block = this;
		do {
			if ((block.type == 'for' || block.type == 'while_true')) {
				legal = true;
				break;
			}
			block = block.getSurroundParent();
		}
		while (block);
		if (legal) {
			if (!this.isInFlyout) {
				this.setDisabled(false);
			}
		} else {
			if (!this.isInFlyout) {
				this.setDisabled(true);
			}
		}
	}
};


Blockly.Blocks['if'] = {
	init: function() {
		this.appendValueInput("IF")
			.setCheck('Boolean')
			.appendField('如果');
		this.appendDummyInput()
			.appendField('那么');
		this.appendStatementInput('DO')
			.appendField('');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl']);
		this.setTooltip('If Statement.');
		this.setHelpUrl('');
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['if_else'] = {
	init: function() {
		this.appendValueInput("IF")
			.setCheck('Boolean')
			.appendField('如果');
		this.appendDummyInput()
			.appendField('那么');
		this.appendStatementInput('DO')
			.appendField('');
		this.appendDummyInput()
			.appendField('否则');
		this.appendStatementInput('DO_OTHER')
			.appendField('');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl']);
		this.setTooltip('If Statement.');
		this.setHelpUrl('');
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['while_until'] = {
	init: function() {
		this.appendValueInput("IF")
			.setCheck('Boolean')
			.appendField('重复执行直到');
		this.appendStatementInput('DO')
			.appendField('');
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldImage("./img/control_loop.svg", 24, 24));
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catControl']);
		this.setTooltip('If Statement.');
		this.setHelpUrl('');
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
//catControl end


/********************catOperation ************************/

Blockly.Blocks['const'] = {
	init: function() {
		this.appendValueInput("A")
			.setCheck('Number');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['add'] = {
	init: function() {

		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('+');
		this.appendValueInput("B")
			.setCheck('Number');

		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sub'] = {
	init: function() {

		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('-');
		this.appendValueInput("B")
			.setCheck('Number');

		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['mul'] = {
	init: function() {

		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('×');
		this.appendValueInput("B")
			.setCheck('Number');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['div'] = {
	init: function() {

		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('÷');
		this.appendValueInput("B")
			.setCheck('Number');

		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['random'] = {
	init: function() {
		this.appendValueInput("FROM")
			.appendField('在')
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('和');
		this.appendValueInput("TO")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('之间取随机数');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['greater'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(' ');
		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('>');
		this.appendValueInput("B")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField(' ');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['less'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(' ');
		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('<');
		this.appendValueInput("B")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField(' ');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['equal'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(' ');
		this.appendValueInput("A")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('=');
		this.appendValueInput("B")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField(' ');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['mod'] = {
	init: function() {

		this.appendValueInput("DIVIDEND")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('除以');
		this.appendValueInput("DIVISOR")
			.setCheck('Number');
		this.appendDummyInput()
			.appendField('的余数');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['math_abs_root_neg'] = {
	init: function() {

		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown([
				['绝对值', 'ABS'],
				['平方根', 'ROOT'],
				['相反数', 'NEG']
			]), 'OP');
		this.appendValueInput("NUM")
			.setCheck('Number');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['math_sin_cos_tan'] = {
	init: function() {

		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown([
				['正弦', 'SIN'],
				['余弦', 'COS'],
				['正切', 'TAN']
			]), 'OP');
		this.appendValueInput("NUM")
			.setCheck('Number');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['math_round_ceil_floor'] = {
	init: function() {

		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown([
				['四舍五入', 'ROUND'],
				['向上取整', 'ROUNDUP'],
				['向下取整', 'ROUNDDOWN'],
			]), 'OP');
		this.appendValueInput("NUM")
			.setCheck('Number');
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catOperation']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

// catOperation end


/********************catRobot************************/
Blockly.Blocks.matrix = {};
Blockly.Blocks.matrix = {

	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldMatrix(), 'MATRIX');
		this.setColour(blocksColor['catRobot']);
		this.setOutput(true, "Number");
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
	}
};

Blockly.Blocks['matrix_display'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("LCD显示");
		this.appendValueInput("MATRIX");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catRobot']);
		this.setTooltip('');
		this.setHelpUrl('');

	},
	onchange: function() {
		isDisplayBlock(this);
	}
};



// Blockly.Blocks['input_img_led_color'] = {
// 	init: function() {
// 		this.appendDummyInput()
// 			.appendField(new Blockly.FieldIconMenu([{
// 					src: './img/robot_set-led_white.svg',
// 					value: 'white',
// 					width: 48,
// 					height: 48,
// 					alt: ''
// 				},
// 				{
// 					src: './img/robot_no-color.svg',
// 					value: 'no_color',
// 					width: 48,
// 					height: 48,
// 					alt: ''
// 				}
// 
// 			]), 'LED_COLOR');
// 		this.setOutput(true, "LED_COLOR");
// 		this.setColour(blocksColor['catRobot'], blocksColor['catRobot'], blocksColor['catRobot']);
// 	},
// 	onchange: function() {
// 		isDisplayBlock(this);
// 	}
// };
// 
// Blockly.Blocks['setledcolor'] = {
// 	/**
// 	 * Block to set color of LED
// 	 * @this Blockly.Block
// 	 */
// 
// 	init: function() {
// 		this.appendDummyInput()
// 			.appendField("LED显示");
// 		this.appendValueInput("LED_COLOR")
// 			.setCheck("LED_COLOR");
// 
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour(blocksColor['catRobot']);
// 		this.setTooltip('');
// 		this.setHelpUrl('');
// 	},
// 	onchange: function() {
// 		isDisplayBlock(this);
// 	}
// };
// 

Blockly.Blocks['setledcolor'] = {
	/**
	 * Block to set color of LED
	 * @this Blockly.Block
	 */
	init: function() {

		this.appendDummyInput()
			.appendField("LED显示")
			.appendField(new Blockly.FieldDropdown([
				['亮', '1'],
				['灭', '0'],
			]), 'STATE');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


var ESP32_PIN = [
	['接口5', '20'],
	['接口6', '21'],
	['接口7', '22'],
	['接口8', '23']
]

var ESP32_PIN_PWM = [
	['接口1', '32'],
	['接口2', '33'],
]

var ESP32_PIN_ADC = [
	['接口1', '32'],
	['接口2', '33'],
	['接口3', '34'],
	['接口4', '35'],
]

Blockly.Blocks['analogWrite'] = {
	init: function() {

		this.appendDummyInput()
			.appendField("设置")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_PWM), 'NAME')
			.appendField("模拟输出");
		this.appendValueInput("A")
			.setCheck('Number');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};


Blockly.Blocks['analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("模拟量");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor1_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("滑动电位器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
Blockly.Blocks['sensor2_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("光线传感器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
Blockly.Blocks['sensor3_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("声音传感器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
Blockly.Blocks['sensor4_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("震动传感器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
Blockly.Blocks['sensor5_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("压力传感器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
Blockly.Blocks['sensor6_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("火焰传感器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
Blockly.Blocks['sensor7_analogRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("读取")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN_ADC), 'NAME')
			.appendField("湿度传感器值");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setOutput(true, "Number");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor1_digitalRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN), 'NAME')
			.appendField("微动开关按下")
			.appendField(" ");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor2_digitalRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN), 'NAME')
			.appendField("按钮开关按下")
			.appendField(" ");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor3_digitalRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN), 'NAME')
			.appendField("自锁开关按下")
			.appendField(" ");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor4_digitalRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN), 'NAME')
			.appendField("巡线开关触发")
			.appendField(" ");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor5_digitalRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN), 'NAME')
			.appendField("红外避障按下")
			.appendField(" ");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

Blockly.Blocks['sensor6_digitalRead'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldDropdown(ESP32_PIN), 'NAME')
			.appendField("霍尔开关按下")
			.appendField(" ");
		this.setInputsInline(true);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
		this.setOutput(true, "Boolean");
		this.setColour(blocksColor['catRobot']);
		this.setHelpUrl("");
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};

function randomColour() {
	var num = Math.floor(Math.random() * Math.pow(2, 24));
	return '#' + ('00000' + num.toString(16)).substr(-6);
}

Blockly.Blocks['colour_picker'] = {
	/**
	 * Block for colour picker.
	 * @this Blockly.Block
	 */

	init: function() {
		this.jsonInit({
			"message0": "%1",
			"args0": [{
				"type": "field_colour_slider",
				"name": "COLOUR",
				"colour": randomColour()
			}],
			"outputShape": Blockly.OUTPUT_SHAPE_ROUND,
			"output": "Colour"
		});
	},
	onchange: function() {
		isDisplayBlock(this);
	}
};
