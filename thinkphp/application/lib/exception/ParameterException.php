<?php 
namespace app\lib\exception;

class ParameterException extends BaseException{
	/* HTTP状态码 */
	public $code = 400;

	/* 错误信息 */
	public $msg = '参数错误';

	/* 自定义错误状态码 */
	public $errorCode = 10000;
}
?>