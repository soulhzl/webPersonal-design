import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Link,
	Redirect
} from 'react-router-dom';
import {
	NoticeBar,
	Icon,
	List,
	InputItem,
	WingBlank,
	Button,
	Radio
} from 'antd-mobile';
import {
	actionCreators
} from '../store';
import {
	RegisterWrapper
} from '../style';
import Logo from '../../../common/logo';

class Register extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			sex: 'boy'
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
		const RadioItem = Radio.RadioItem;
		const {
			sex
		} = this.state;
		const {
			msg,
			redirectTo,
			handleRegInfo
		} = this.props;
		return (<RegisterWrapper>
			{redirectTo === '' ? null : <Redirect to={redirectTo}/>}
			<Link to='/login'><Icon className="back" type="left" size="lg" color="#222"/></Link>
			<Logo logoImg='register.png'/>
			<h2>注册完毕即可享受漫游の旅</h2>
			{msg === '' ? null : <NoticeBar className='notice_bar' marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      		{msg}
    		</NoticeBar>}
			<List className='registerList'>
			<InputItem onChange={(v) => {this.handleChange('user' ,v)}}>用户名</InputItem>
			<InputItem type='password' onChange={(v) => {this.handleChange('pwd' ,v)}}>密码</InputItem>
			<InputItem type='password' onChange={(v) => {this.handleChange('repeatpwd' ,v)}}>确认密码</InputItem>
			<RadioItem checked={sex === 'boy'} onChange={() => {this.handleChange('sex' ,'boy')}}>男生</RadioItem>
			<RadioItem checked={sex === 'girl'} onChange={() => {this.handleChange('sex' , 'girl')}}>女生</RadioItem>
			</List>
			<WingBlank>
			<Button type='primary' onClick={() => {handleRegInfo(this.state)}}>注册</Button>
			</WingBlank>
			</RegisterWrapper>);
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
		// 发送注册信息
		handleRegInfo(value) {
			dispatch(actionCreators.handleRegInfo(value));
		}
	};
};

export default connect(mapState, mapDispatch)(Register);