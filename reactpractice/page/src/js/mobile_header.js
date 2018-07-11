import React from 'react';
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'one',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
	}

	setModalVisible(value){
		this.setState({
			modalVisible: value
		});
	}

	handleClick(e){
		if (e.key == 'register') {
			this.setState({
				current: 'register'
			});
			this.setModalVisible(true);
		}
		else{
			this.setState({
				current: e.key
			});
		}
	}

	handleSubmit(e){
		e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
			+ "&username="+formData.userName+"&password="+formData.password
			+"&r_userName=" + formData.r_userName + "&r_password="
			+ formData.r_password + "&r_confirmPassword="
			+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json()).then(json => {
			this.setState({
				userNickName: json.NickUserName,
				userid: json.UserId
			});
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("注册成功");
		this.setModalVisible(false);
	}

	login(){
		this.setModalVisible(true);
	}

	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	}

	render(){
		let {getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined ? <Link to='/usercenter'><Icon type='inbox'/></Link> : <Icon type='setting' onClick={this.login.bind(this)}/>

		return (
			<header class='mobileheader'>
			<Link to='/page'>
			<img src='./src/image/icon.png' alt='logo'/>
			<span>Resume</span>
			</Link>
			{userShow}
			<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onOK={() => this.setModalVisible(false)} onCancel={() => this.setModalVisible(false)} onText='关闭'
			>
			<Tabs type='card' onChange={this.callback.bind(this)}>
			<TabPane tab="登录" key="1">
			<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
			<FormItem label='账户'>
			<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
			</FormItem>
			<FormItem label='密码'>
			<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
			</FormItem>
			<Button type="primary" htmlType="submit">登录</Button>
			</Form>
			</TabPane>

			<TabPane tab="注册" key="2">
			<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
			<FormItem label='账户'>
			<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
			</FormItem>
			<FormItem label='密码'>
			<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
			</FormItem>
			<FormItem label='确认密码'>
			<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')}/>
			</FormItem>
			<Button type='primary' htmlType='submit'>注册</Button>
			</Form>
			</TabPane>
			</Tabs>
			</Modal>
			</header>
			);
		}
	}

	export default MobileHeader = Form.create({})(MobileHeader);