;(function($){
	$.fn.extend({
		'alterBgColor' : function(opt){
			opt = $.extend({
				odd: "odd",
				even: "even"
			}, opt);

			$('tbody>tr:odd', this).addClass(opt.odd);
			$('tbody>tr:even', this).addClass(opt.even);

			return this;
		}
	});
})(jQuery);