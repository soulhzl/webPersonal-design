<?php 
namespace app\api\validate;

use think\Validate;

class IDMustPositiveInt extends BaseValidate{
	protected $rule = [
		'id' => 'require|isPositiveInteger'
	];

	protected function isPositiveInteger($value, $rule='', $data='', $filed=''){
		if (is_numeric($value) && is_int($value + 0) && ($value + 0) > 0) {
			return true;
		}else{
			return $filed . '必须是正整数';
		}
	}
}
?>