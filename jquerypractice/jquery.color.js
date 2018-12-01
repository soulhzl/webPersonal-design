// 插件制作
;(function($){
	// 对象方法扩展
	$.fn.extend({
		"color" : function(value){
				return this.css('color', value);	
		}
	});
})(jQuery);