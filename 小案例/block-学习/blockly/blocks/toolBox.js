
Blockly.Blocks.defaultToolbox = 
'<xml id="toolbox" style="display: none">' +
			'<category id="catControl"' + ' name="' + blocksCategoryName['catControl'] +'" colour="' + blocksColor['catControl'] + '">' +
				
				'<block type="esp32_begin"></block>' +
				'<block type="sleep">' +
					'<value name="TIME">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1000</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
		
				'<block type="while_true"></block>' +
				'<block type="for">' +
					'<value name="COUNT">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">10</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
		
				'<block type="break"></block>' +
				'<block type="if"></block>' +
				'<block type="if_else"></block>' +
				'<block type="while_until"></block>' +
		
			'</category>' +
			'<category id="catOperation"'+ ' name="' + blocksCategoryName['catOperation'] + '" colour="' + blocksColor['catOperation'] + '">' +
				//'<label text="常数" web-class="myLabelStyle"></label>'+
				//'<button text="设置" callbackKey="myFirstButtonPressed"></button>'+
				'<block type="const">'+
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">0</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="add">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="sub">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="mul">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="div">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="random">' +
					'<value name="FROM">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">1</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="TO">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">5</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="greater">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">50</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">0</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="less">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">0</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">50</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="equal">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">50</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="B">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">50</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="mod">' +
					'<value name="DIVIDEND">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">10</field>' +
						'</shadow>' +
					'</value>' +
					'<value name="DIVISOR">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">3</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
		
				'<block type="math_abs_root_neg">' +
					'<value name="NUM">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">9</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				
				'<block type="math_sin_cos_tan">' +
					'<value name="NUM">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">45</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				
				'<block type="math_round_ceil_floor">' +
					'<value name="NUM">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">3.1</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
			'</category>' +
			
			'<category id="catVariable" custom="VARIABLE"'+' name="'+blocksCategoryName['catVariable'] + '"' +' colour="' + blocksColor['catVariable'] + '"></category>' +
			'<category id="catFunction" custom="PROCEDURE"'+' name="'+blocksCategoryName['catFunction'] + '"' +' colour="' + blocksColor['catFunction'] + '"></category>'+
			'<category id="catRobot" '+'name="'+blocksCategoryName['catRobot'] +'" colour="' + blocksColor['catRobot']+'">' +

				'<block type="setledcolor"></block>' +
				'<block type="matrix_display">' +
					'<value name="MATRIX">' +
						'<shadow type="matrix">' +
							'<field name="MATRIX">' +
								'01010'+
								'11111'+
								'11111'+
								'01110'+
								'00100' +
							'</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="analogWrite">' +
					'<value name="A">' +
						'<shadow type="input_number_inline">' +
							'<field name="NUM">512</field>' +
						'</shadow>' +
					'</value>' +
				'</block>' +
				'<block type="analogRead"></block>' +
				'<block type="sensor1_analogRead"></block>' +
				'<block type="sensor2_analogRead"></block>' +
				'<block type="sensor3_analogRead"></block>' +
				'<block type="sensor4_analogRead"></block>' +
				'<block type="sensor5_analogRead"></block>' +
				'<block type="sensor6_analogRead"></block>' +
				'<block type="sensor7_analogRead"></block>' +
				'<block type="sensor1_digitalRead"></block>' +
				'<block type="sensor2_digitalRead"></block>' +
				'<block type="sensor3_digitalRead"></block>' +
				'<block type="sensor4_digitalRead"></block>' +
				'<block type="sensor5_digitalRead"></block>' +
				
			'</category>' +
		'</xml>';