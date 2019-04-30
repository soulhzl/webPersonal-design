export const getRedirectPath = (sex, avatar) => {
	// 根据用户信息跳转地址
	let url = (sex === 'boy') ? '/boy' : '/girl';
	if (!avatar) {
		url += 'info'
	}
	return url
}


// 获取聊天ID
export const getChatId = (userId, targetId) => {
	return [userId, targetId].sort().join('_');
};