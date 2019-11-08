goog.provide('Blockly.Python.blocks');

goog.require('Blockly.Python');

Blockly.Python['input_number_inline'] = function(block) {
	var text_text = block.getFieldValue('NUM');
	// TODO: Assemble Python into code variable.
	var code = text_text;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['input_text_inline'] = function(block) {
	var text_text = block.getFieldValue('TEXT');
	// TODO: Assemble Python into code variable.
	var code = text_text;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['input_bool_inline'] = function(block) {
	var text_text = block.getFieldValue('TEXT');
	// TODO: Assemble Python into code variable.
	var code = text_text;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['input_string_inline'] = function(block) {
	var text_text = block.getFieldValue('TEXT');
	// TODO: Assemble Python into code variable.
	var code = '"' + text_text + '"';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['input_slider_inline'] = function(block) {
	var text_text = block.getFieldValue('SLIDER');
	// TODO: Assemble Python into code variable.
	var code = text_text;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['esp32_begin'] = function(block) {
	return "";
};


Blockly.Python['sleep'] = function(block) {
	Blockly.Python.definitions_['import_time'] = 'import time';
	var text_sleeptime = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
	var code = 'time.sleep_ms(' + text_sleeptime + ')\n';
	return code;
};

Blockly.Python['while_true'] = function(block) {
	var branch = Blockly.Python.statementToCode(block, 'DO');
	branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
	return 'while True:\n' + branch;
};

Blockly.Python['for'] = function(block) {
	var branch = Blockly.Python.statementToCode(block, 'DO');
	branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
	var text_no = Blockly.Python.valueToCode(block, 'COUNT', Blockly.Python.ORDER_ATOMIC);
	var code = 'for i in range(' + text_no + '):\n' + branch;
	return code;
};

Blockly.Python['break'] = function(block) {
	var code = 'break\n ';
	return code;
};


Blockly.Python['if'] = function(block) {

	//var text_const = block.getFieldValue('IF');
	var code = '',
		branchCode, conditionCode;
	conditionCode = Blockly.Python.valueToCode(block, 'IF',
		Blockly.Python.ORDER_NONE) || 'False';
	branchCode = Blockly.Python.statementToCode(block, 'DO') ||
		Blockly.Python.PASS;
	code += ('if ') + conditionCode + ':\n' + branchCode;

	return code;
};

Blockly.Python['if_else'] = function(block) {

	var code = '',
		branchCode, conditionCode, branch;
	conditionCode = Blockly.Python.valueToCode(block, 'IF',
		Blockly.Python.ORDER_NONE) || 'False';
	branchCode = Blockly.Python.statementToCode(block, 'DO') ||
		Blockly.Python.PASS;

	branch = Blockly.Python.statementToCode(block, block, 'DO_OTHER');
	branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

	code += ('if ') + conditionCode + ':\n' + branchCode + 'else:\n' + branch;
	return code;
};

Blockly.Python['while_until'] = function(block) {
	var code = '',
		branchCode, conditionCode, branch;
	conditionCode = Blockly.Python.valueToCode(block, 'IF',
		Blockly.Python.ORDER_NONE) || 'False';

	var branch = Blockly.Python.statementToCode(block, 'DO');
	branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
	return 'while not' + conditionCode + ':\n' + branch;
};

Blockly.Python['const'] = function(block) {

	var argument0 = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC) || '0';
	var code = argument0;
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.OPERATORS = {
	'ADD': [' + ', Blockly.Python.ORDER_ADDITIVE],
	'MINUS': [' - ', Blockly.Python.ORDER_ADDITIVE],
	'MULTIPLY': [' * ', Blockly.Python.ORDER_MULTIPLICATIVE],
	'DIVIDE': [' / ', Blockly.Python.ORDER_MULTIPLICATIVE],
	'POWER': [' ** ', Blockly.Python.ORDER_EXPONENTIATION]
};

Blockly.Python['add'] = function(block) {

	var tuple = Blockly.Python.OPERATORS['ADD'];
	var operator = tuple[0];
	var order = tuple[1];
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + operator + argument1;
	return [code, order];
};

Blockly.Python['sub'] = function(block) {

	var tuple = Blockly.Python.OPERATORS['MINUS'];
	var operator = tuple[0];
	var order = tuple[1];
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + operator + argument1;
	return [code, order];
};

Blockly.Python['mul'] = function(block) {

	var tuple = Blockly.Python.OPERATORS['MULTIPLY'];
	var operator = tuple[0];
	var order = tuple[1];
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + operator + argument1;
	return [code, order];
};

Blockly.Python['div'] = function(block) {
	var tuple = Blockly.Python.OPERATORS['DIVIDE'];
	var operator = tuple[0];
	var order = tuple[1];
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + operator + argument1;
	return [code, order];
};

Blockly.Python['random'] = function(block) {
	// Random integer between [X] and [Y].
	Blockly.Python.definitions_['import_random'] = 'import random';
	var argument0 = Blockly.Python.valueToCode(block, 'FROM',
		Blockly.Python.ORDER_NONE) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'TO',
		Blockly.Python.ORDER_NONE) || '0';
	var code = 'random.randint(' + argument0 + ', ' + argument1 + ')';
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};



Blockly.Python['greater'] = function(block) {
	// Comparison operator.
	var order = Blockly.Python.ORDER_RELATIONAL;
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + ' > ' + argument1;
	return [code, order];
};


Blockly.Python['less'] = function(block) {

	// Comparison operator.
	var order = Blockly.Python.ORDER_RELATIONAL;
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + ' < ' + argument1;
	return [code, order];
};

Blockly.Python['equal'] = function(block) {
	// Comparison operator.
	var order = Blockly.Python.ORDER_RELATIONAL;
	var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
	var code = argument0 + ' == ' + argument1;
	return [code, order];
};



Blockly.Python['mod'] = function(block) {
	// Remainder computation.
	var argument0 = Blockly.Python.valueToCode(block, 'DIVIDEND',
		Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
	var argument1 = Blockly.Python.valueToCode(block, 'DIVISOR',
		Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
	var code = argument0 + ' % ' + argument1;
	return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};


Blockly.Python['math_abs_root_neg'] = function(block) {
	// Math operators with single operand.
	var operator = block.getFieldValue('OP');
	var code;
	var arg;
	if (operator == 'NEG') {
		// Negation is a special case given its different operator precedence.
		var code = Blockly.Python.valueToCode(block, 'NUM',
			Blockly.Python.ORDER_UNARY_SIGN) || '0';
		return ['-' + code, Blockly.Python.ORDER_UNARY_SIGN];
	}
	Blockly.Python.definitions_['import_math'] = 'import math';
	arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || '0';
	// First, handle cases which generate values that don't need parentheses
	// wrapping the code.
	switch (operator) {
		case 'ABS':
			code = 'math.fabs(' + arg + ')';
			break;
		case 'ROOT':
			code = 'math.sqrt(' + arg + ')';
			break;
	}
	if (code) {
		return [code, Blockly.Python.ORDER_FUNCTION_CALL];
	}
};


Blockly.Python['math_sin_cos_tan'] = function(block) {
	// Math operators with single operand.
	var operator = block.getFieldValue('OP');
	var code;
	var arg;
	Blockly.Python.definitions_['import_math'] = 'import math';
	if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
		arg = Blockly.Python.valueToCode(block, 'NUM',
			Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
	}
	// First, handle cases which generate values that don't need parentheses
	// wrapping the code.
	switch (operator) {
		case 'SIN':
			code = 'math.sin(' + arg + ' / 180.0 * math.pi)';
			break;
		case 'COS':
			code = 'math.cos(' + arg + ' / 180.0 * math.pi)';
			break;
		case 'TAN':
			code = 'math.tan(' + arg + ' / 180.0 * math.pi)';
			break;
	}
	if (code) {
		return [code, Blockly.Python.ORDER_FUNCTION_CALL];
	}
};


Blockly.Python['math_round_ceil_floor'] = function(block) {
	// Math operators with single operand.
	var operator = block.getFieldValue('OP');
	var code;
	var arg;
	arg = Blockly.Python.valueToCode(block, 'NUM',
		Blockly.Python.ORDER_NONE) || '0';
	// First, handle cases which generate values that don't need parentheses
	// wrapping the code.
	switch (operator) {

		case 'ROUND':
			code = 'round(' + arg + ')';
			break;
		case 'ROUNDUP':
			code = 'math.ceil(' + arg + ')';
			break;
		case 'ROUNDDOWN':
			code = 'math.floor(' + arg + ')';
			break;
	}
	if (code) {
		return [code, Blockly.Python.ORDER_FUNCTION_CALL];
	}
}

//pwm5 = PWM(Pin(5), freq=5000, duty=512)
Blockly.Python['analogWrite'] = function(block) {
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
	var pin = block.getFieldValue('NAME');
	var value = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
	var code = 'pin' + pin + ' = PWM(Pin(' + pin + '), freq=5000, duty=' + value + ')\n';
	return code;
};

Blockly.Python.ANALOG_READ = function(pin) {
	// read value, 0-4095s
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
	var code = 'ADC(Pin(' + pin + ')).read()';
	return code;

}

Blockly.Python['analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};


Blockly.Python['sensor1_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor2_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['sensor3_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['sensor4_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['sensor5_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor6_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor7_analogRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.ANALOG_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

//p5 = Pin(5, Pin.IN)     # create input pin on GPIO2
//print(p5.value())       # get value, 0 or 1

Blockly.Python['input_img_led_color'] = function(block) {
	var text_text = block.getFieldValue('LED_COLOR');
	// TODO: Assemble Python into code variable.
	var code = text_text;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['setledcolor'] = function(block) {
	// Remainder computation.
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pin_out'] = 'p5 = Pin(5, Pin.OUT)';
	var state = block.getFieldValue('STATE');
	var code = 'p5.value(' + state + ')\n';
	return code;
};



Blockly.Python['matrix_display'] = function(block) {
	// Remainder computation.
	//这个需要确定硬件,防止报错,返回''
	return '';
};

Blockly.Python.DIGITAL_READ = function(pin) {
	// read value, 0-4095s
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

	Blockly.Python.definitions_[pin + 'import_adc_pin'] = 'pin' + pin + '= Pin(' + pin + ', Pin.IN)';
	var code = 'pin' + pin + '.value()';
	return code;

}

Blockly.Python['sensor1_digitalRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.DIGITAL_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor2_digitalRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.DIGITAL_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor3_digitalRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.DIGITAL_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor4_digitalRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.DIGITAL_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor5_digitalRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.DIGITAL_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor6_digitalRead'] = function(block) {
	// Remainder computation.
	var pin = block.getFieldValue('NAME');
	var code = Blockly.Python.DIGITAL_READ(pin);
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
