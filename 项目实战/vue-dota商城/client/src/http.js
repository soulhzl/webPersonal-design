import axios from 'axios';
import router from './router'

function startLoading() {
	// 开始加载
}

function endLoading() {
	// 结束加载
}
// 拦截器请求
axios.interceptors.request.use(config => {
	startLoading();
	// 本地存储是否有token，有则设置请求头验证
	if (localStorage.eleToken) {
		config.headers.Authorization = localStorage.eleToken;
	}
	return config;
}, error => {
	return Promise.reject(error)
});
// 拦截器响应
axios.interceptors.response.use(response => {
	endLoading();
	return response;
}, error => {
	endLoading();
	const {
		status
	} = error.response;
	// 如果为401状态，清除token跳转到登陆页面
	if (status == 401) {
		localStorage.removeItem('eleToken');
		router.push('/login')
	}
	return Promise.reject(error)
});

export default axios;