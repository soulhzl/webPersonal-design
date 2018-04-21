<?php 
namespace app\api\model;

use think\Db;
use think\Exception;

class Banner{
	public static function getBannerByID($id){
		$result = Db::query('SELECT * FROM banner_item WHERE banner_id=?', [$id]);

		return $result;
	}
}

?>