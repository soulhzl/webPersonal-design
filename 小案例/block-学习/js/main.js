/**
 *name main.js
 *@author Lzm
 *date 2019-06-16
 */



var Workspace = {};
Workspace.workspace = null;
Workspace.isWorkspaceChange = false;



/**
 * 接口:getBlocklyCode()
 * 功能:获取用户生成的python代码
 * 返回:生成的Blockly代码
 * 格式:xml
 * 类型:String
 */
function getBlocklyCode() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var blocklyCode = Blockly.Xml.domToText(xml);
	console.log("生成的图形化代码:\n" + blocklyCode);
	return blocklyCode
}

/**
 * 接口:getPythonCode()
 * 功能:获取用户生成的python代码
 * 返回:生成的python代码
 * 格式:python
 * 类型:String
 */
function getPythonCode() {
	var pythonCode = Blockly.Python.workspaceToCode(Workspace.workspace);
	console.log("生成的python代码:\n" + pythonCode);
	return pythonCode;
}


/**
 * 接口:getPythonCode()
 * 功能:打开用户保存的图形化代码
 * 参数:blocklyCode
 * 格式:xml
 * 类型:String
 */
function setBlocklyCode(blocklyCode) {
	blocklyCode = Blockly.Xml.textToDom(blocklyCode);
	Blockly.mainWorkspace.clear();
	Blockly.Xml.domToWorkspace(blocklyCode, Blockly.mainWorkspace);
}

/**
 * 接口:getBlocklyCount()
 * 功能:获取当前块的个数
 * 返回:当前编辑区块的个数
 * 格式:count
 * 类型:int
 */
function getBlocklyCount() {
	var count = Blockly.mainWorkspace.getAllBlocks().length;
	console.log("块的个数:", count);
	return count;
}


/**
 * 调试使用
 */
function debug_code() {
	document.getElementById('debug_button').onclick = function() {
		getBlocklyCode();
		getPythonCode();
		setBlocklyCode(getBlocklyCode());
		getBlocklyCount();
	}
}

/**
 * 工作空间初始化
 */
Workspace.init = function() {

	debug_code();
	
	//配置块空间
	Workspace.workspace = Blockly.inject(document.getElementById('blocklyDiv'), {
		help: false, //关闭帮助功能
		comments: false, //关闭注释功能
		disable: true, //开启禁用块功能
		scrollbars: true, //开启代码工作区移动功能
		trashcan: true, //右下角垃圾桶弄能
		grid: { //块空间网格配置
			spacing: 0, //块移动的最小单位	
			length: 0, //网格线
			colour: '#ffffff', //网格线颜色
			snap: true
		},
		zoom: { //块空间缩放配置
			controls: true, //开启右下角定位图标
			wheel: true, //开启鼠标滚轮缩放及滑动
			startScale: 1.0, //块默认倍数
			maxScale: 4, //块最大倍数
			minScale: 0.25, //块最小倍数
			scaleSpeed: 1.1 //块的缩放速度
		},
		colours: { //块空间颜色配置
			workspace: '#ffffff', //块空间背景色,默认#334771;如果设置背景色将不起作用,位置index.css ->.blocklySvg
			flyout: '#283856', //弹出块背景色，默认#283856
			scrollbar: '#aaaaaa', //块空间滑块颜色
			insertionMarker: '#000000', //代码放置位置预提示颜色
			insertionMarkerOpacity: 0.3, //代码放置位置预提示颜色透明度
			fieldShadow: 'rgba(0, 0, 0, 0.3)', //块输入框选中边框
			dragShadowOpacity: 0.6 //拖拽块背景阴影透明度
		},

		media: './blockly/media/',
		toolbox: Blockly.Blocks.defaultToolbox,

	});
	
	//是否添加默认的块
	//var containerBlock = Blockly.mainWorkspace.newBlock('esp32_begin');
	//containerBlock.initSvg();
	Blockly.svgResize(Workspace.workspace);
	Blockly.mainWorkspace.render(); 
	//Blockly.mainWorkspace.scrollCenter();
	window.setTimeout(Workspace.importPrettify, 1);
	
	
}



document.write('<script type="text/javascript" src="./js/lib/jquery-1.11.3.min.js"></script>');
document.write('<script type="text/javascript" src="./blockly/blockly_compressed.js"></script>');
document.write('<script type="text/javascript" src="./blockly/python_compressed.js"></script>');
document.write('<script type="text/javascript" src="./blockly/blocks/blocks.js"></script>');
document.write('<script type="text/javascript" src="./blockly/blocks/variables.js"></script>');
document.write('<script type="text/javascript" src="./blockly/blocks/procedures.js"></script>');
document.write('<script type="text/javascript" src="./blockly/generators/blocks.js"></script>');
document.write('<script type="text/javascript" src="./blockly/generators/variables.js"></script>');
document.write('<script type="text/javascript" src="./blockly/generators/procedures.js"></script>');
document.write('<script type="text/javascript" src="./blockly/blocks/toolBox.js"></script>');
document.write('<script type="text/javascript" src="./blockly/msg/zh-hans.js"></script>');

window.addEventListener('load', Workspace.init);






