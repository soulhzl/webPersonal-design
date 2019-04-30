import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent{

	render(){
		const { login, loginAct } = this.props;

		if (!login) {
		return (<LoginWrapper>
			<LoginBox>
			<Input placeholder="账号" ref={(input) => {this.account = input}}/>
			<Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
			<Button onClick={() => loginAct(this.account, this.password)}>登录</Button>
			</LoginBox>
			</LoginWrapper>);
		}else{
			return (<Redirect to='/'/>);
		}
	}
}

const mapState = (state) => ({
	login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => {
	return {
		loginAct(account, password){
			dispatch(actionCreators.loginAct(account.value, password.value));
		}
	}
}

export default connect(mapState, mapDispatch)(Login);