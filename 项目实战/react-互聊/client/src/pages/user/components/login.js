import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Redirect
} from 'react-router-dom';
import {
	NoticeBar,
	List,
	InputItem,
	WingBlank,
	WhiteSpace,
	Button
} from 'antd-mobile';
import {
	actionCreators
} from '../store';
import {
	LoginWrapper
} from '../style';
import Logo from '../../../common/logo';

class Login extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	// 修改输入的表单数据
	handleChange(type, value) {
		this.setState({
			[type]: value
		});
	}

	render() {
		const {
			msg,
			redirectTo,
			handleLoginInfo
		} = this.props;
		return (<LoginWrapper>
			{redirectTo && redirectTo !== '/login' ? <Redirect to={redirectTo}/> : null}
			<Logo logoImg='login.png'/>
			<h2>您好！请登录~</h2>
			{msg === '' ? null : <NoticeBar className='notice_bar' marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      		{msg}
    		</NoticeBar>}
			<List className='loginList'>
			<InputItem onChange={(v) => {this.handleChange("user", v)}}>用户</InputItem>
			<InputItem type='password' onChange={(v) => {this.handleChange("pwd", v)}}>密码</InputItem>
			</List>
			<WhiteSpace />
			<WingBlank>
			<Button type='primary' onClick={() => {handleLoginInfo(this.state)}}>登录</Button>
			<WhiteSpace />
			<Button type='primary' href='/register'>注册</Button>
			</WingBlank>
			</LoginWrapper>);
	}
}

const mapState = (state) => {
	return {
		msg: state.getIn(['user', 'msg']),
		redirectTo: state.getIn(['user', 'redirectTo'])
	};
};

const mapDispatch = (dispatch) => {
	return {
		// 发送登录信息
		handleLoginInfo(value) {
			dispatch(actionCreators.handleLoginInfo(value));
		}
	};
};

export default connect(mapState, mapDispatch)(Login);