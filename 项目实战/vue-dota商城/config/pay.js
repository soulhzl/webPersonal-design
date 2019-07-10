const path = require('path');
const fs = require('fs');
const moment = require('moment');
const crypto = require('crypto');

let ALI_PAY_SETTINGS = {
	APP_ID: '2016091100487933',
	APP_GATEWAY_URL: 'xxxxxxx', //用于接收支付宝异步通知
	AUTH_REDIRECT_URL: 'xxxxxxx', //第三方授权或用户信息授权后回调地址。授权链接中配置的redirect_uri的值必须与此值保持一致。
	APP_PRIVATE_KEY_PATH: path.join(__dirname, 'pem', 'remind', 'sandbox', 'app-private.pem'), //应用私钥
	APP_PUBLIC_KEY_PATH: path.join(__dirname, 'pem', 'remind', 'sandbox', 'app-public.pem'), //应用公钥
	ALI_PUBLIC_KEY_PATH: path.join(__dirname, 'pem', 'remind', 'sandbox', 'ali-public.pem'), //阿里公钥
	AES_PATH: path.join(__dirname, 'pem', 'remind', 'sandbox', 'aes.txt'), //aes加密（暂未使用）
};


class AliPayHelper {

	/**
	 * 构造方法
	 * @param accountType   用于以后区分多支付账号
	 */
	constructor(accountType) {
		this.accountType = accountType;
		this.accountSettings = ALI_PAY_SETTINGS;
	}

	/**
	 * 构建app支付需要的参数
	 * @param subject       商品名称
	 * @param outTradeNo    自己公司的订单号
	 * @param totalAmount   金额
	 * @returns {string}
	 */
	buildParams(subject, outTradeNo, totalAmount) {
		let params = new Map();
		params.set('app_id', this.accountSettings.APP_ID);
		params.set('method', 'alipay.trade.app.pay');
		params.set('charset', 'utf-8');
		params.set('sign_type', 'RSA2');
		params.set('timestamp', moment().format('YYYY-MM-DD HH:mm:ss'));
		params.set('version', '1.0');
		params.set('notify_url', this.accountSettings.APP_GATEWAY_URL);
		params.set('biz_content', this._buildBizContent(subject, outTradeNo, totalAmount));
		params.set('sign', this._buildSign(params));

		return [...params].map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
	}

	/**
	 * 根据参数构建签名
	 * @param paramsMap    Map对象
	 * @returns {number|PromiseLike<ArrayBuffer>}
	 * @private
	 */
	_buildSign(paramsMap) {
		//1.获取所有请求参数，不包括字节类型参数，如文件、字节流，剔除sign字段，剔除值为空的参数
		let paramsList = [...paramsMap].filter(([k1, v1]) => k1 !== 'sign' && v1);
		//2.按照字符的键值ASCII码递增排序
		paramsList.sort();
		//3.组合成“参数=参数值”的格式，并且把这些参数用&字符连接起来
		let paramsString = paramsList.map(([k, v]) => `${k}=${v}`).join('&');

		let privateKey = fs.readFileSync(this.accountSettings.APP_PRIVATE_KEY_PATH, 'utf8');
		let signType = paramsMap.get('sign_type');
		return this._signWithPrivateKey(signType, paramsString, privateKey);
	}

	/**
	 * 通过私钥给字符串签名
	 * @param signType      返回参数的签名类型：RSA2或RSA
	 * @param content       需要加密的字符串
	 * @param privateKey    私钥
	 * @returns {number | PromiseLike<ArrayBuffer>}
	 * @private
	 */
	_signWithPrivateKey(signType, content, privateKey) {
		let sign;
		if (signType.toUpperCase() === 'RSA2') {
			sign = crypto.createSign("RSA-SHA256");
		} else if (signType.toUpperCase() === 'RSA') {
			sign = crypto.createSign("RSA-SHA1");
		} else {
			throw new Error('请传入正确的签名方式，signType：' + signType);
		}
		sign.update(content);
		return sign.sign(privateKey, 'base64');
	}

	/**
	 * 生成业务请求参数的集合
	 * @param subject       商品的标题/交易标题/订单标题/订单关键字等。
	 * @param outTradeNo    商户网站唯一订单号
	 * @param totalAmount   订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]
	 * @returns {string}    json字符串
	 * @private
	 */
	_buildBizContent(subject, outTradeNo, totalAmount) {
		let bizContent = {
			subject: subject,
			out_trade_no: outTradeNo,
			total_amount: totalAmount,
			product_code: 'QUICK_MSECURITY_PAY',
		};

		return JSON.stringify(bizContent);
	}

	/**
	 * 验证支付宝异步通知的合法性
	 * @param params  支付宝异步通知结果的参数
	 * @returns {*}
	 */
	verifySign(params) {
		try {
			let sign = params['sign']; //签名
			let signType = params['sign_type']; //签名类型
			let paramsMap = new Map();
			for (let key in params) {
				paramsMap.set(key, params[key]);
			}
			let paramsList = [...paramsMap].filter(([k1, v1]) => k1 !== 'sign' && k1 !== 'sign_type' && v1);
			//2.按照字符的键值ASCII码递增排序
			paramsList.sort();
			//3.组合成“参数=参数值”的格式，并且把这些参数用&字符连接起来
			let paramsString = paramsList.map(([k, v]) => `${k}=${decodeURIComponent(v)}`).join('&');
			let publicKey = fs.readFileSync(this.accountSettings.ALI_PUBLIC_KEY_PATH, 'utf8');
			return this._verifyWithPublicKey(signType, sign, paramsString, publicKey);
		} catch (e) {
			console.error(e);
			return false;
		}
	}

	/**
	 * 验证签名
	 * @param signType      返回参数的签名类型：RSA2或RSA
	 * @param sign          返回参数的签名
	 * @param content       参数组成的待验签串
	 * @param publicKey     支付宝公钥
	 * @returns {*}         是否验证成功
	 * @private
	 */
	_verifyWithPublicKey(signType, sign, content, publicKey) {
		try {
			let verify;
			if (signType.toUpperCase() === 'RSA2') {
				verify = crypto.createVerify('RSA-SHA256');
			} else if (signType.toUpperCase() === 'RSA') {
				verify = crypto.createVerify('RSA-SHA1');
			} else {
				throw new Error('未知signType：' + signType);
			}
			verify.update(content);
			return verify.verify(publicKey, sign, 'base64')
		} catch (err) {
			console.error(err);
			return false;
		}
	}

}

module.exports = AliPayHelper;