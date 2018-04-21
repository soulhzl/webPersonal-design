<?php
namespace app\api\controller\v1;

/**
* 获取指定id的banner信息
* @url /banner/:id
* @http GET
* @id banner的id号
*/
use app\api\validate\IDMustPositiveInt;
use app\api\model\Banner as BannerModel;
use app\lib\exception\BannerMissException;

class Banner
{
    public function getBanner($id)
    {
    	(new IDMustPositiveInt())->goCheck();
    	$banner = BannerModel::getBannerByID($id);
    	if (!$banner) {
    		throw new BannerMissException();
    	}
    	return json($banner);
    }
}
