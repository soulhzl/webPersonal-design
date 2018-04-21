<?php 
namespace app\lib\exception;

class BannerMissException extends BaseException{
	/* HTTP状态码 */
	public $code = 404;

	/* 错误信息 */
	public $msg = '请求的Banner不存在';

	/* 自定义错误状态码 */
	public $errorCode = 40000;
}
?>
