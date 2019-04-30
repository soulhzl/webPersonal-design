import * as constants from './constants';

export const useReg = () => ({
	type: constants.CHANGE_REG,
});

export const useLogin = () => ({
	type: constants.CHANGE_LOGIN,
});