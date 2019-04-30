import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	LoginWrapper,
	LoginSelectArea,
	LoginMainArea,
	RegMainArea,
	IconArea
} from './style';
import {
	actionCreators
} from './store';

class Login extends PureComponent {
	render() {

		const {
			regOrLogin,
			useReg,
			useLogin
		} = this.props;

		return (
			<LoginWrapper>
			<LoginSelectArea>
			<span className={ regOrLogin ? '' : 'selected'} onClick={useLogin}>登录</span>·
			<span className={ regOrLogin ? 'selected' : ''} onClick={useReg}>注册</span>
			</LoginSelectArea>
			{
				regOrLogin ? <RegMainArea>
				<input type='text' name='reg' placeholder='账号'/>
				<input type='password' name='password' placeholder='密码'/>
				<input type='password' name='repassword' placeholder='再输入一次密码'/>
				<button>注册</button>
				<IconArea><svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-weixin"></use>'}}></svg><svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-social-qq"></use>'}}></svg></IconArea>
				</RegMainArea> : <LoginMainArea>
				<input type='text' name='login' placeholder='账号'/>
				<input type='password' name='password' placeholder='密码'/>
				<button>登录</button>
				<IconArea><svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-weixin"></use>'}}></svg><svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-social-qq"></use>'}}></svg></IconArea>
				</LoginMainArea>
			}
			</LoginWrapper>
		);
	}
}

const mapState = (state) => ({
	regOrLogin: state.getIn(['login', 'regOrLogin'])
});

const mapDispatch = (dispatch) => {
	return {
		useReg() {
			dispatch(actionCreators.useReg());
		},

		useLogin() {
			dispatch(actionCreators.useLogin());
		}
	}
};

export default connect(mapState, mapDispatch)(Login);