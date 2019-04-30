import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PcHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'one'
		};
	}

	handleClick(e){
		
			this.setState({
				current: e.key
			});
	}

	render(){
		return (
		<header class='header'>

		<Row>
		<Col span={2}></Col>

		<Col span={4}>
		<Link to='/reactmyweb'>
		<a href='/' class='logo'>
		<img src='./src/image/icon.png' alt='logo'/>
		<span>Resume</span>
		</a>
		</Link>
		</Col>

		<Col span={16}>
		
		<Menu mode='horizontal' onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
		<Menu.Item key="one">
		<Link to='/reactmyweb'><Icon type="code-o" />Resume</Link>
		</Menu.Item>
		<Menu.Item key="two">
		<Link to='/musicbox'><Icon type="sound" />Music</Link>
		</Menu.Item>
		</Menu>

		</Col>

		<Col span={2}></Col>
		</Row>

		</header>
		);
	}
}

