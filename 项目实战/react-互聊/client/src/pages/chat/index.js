import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	actionCreators
} from './store';
import {
	Route,
	Switch
} from 'react-router-dom';
import {
	NavBar
} from 'antd-mobile';
import NavTabBar from './components/navtabbar';
import {
	DashboardWrapper
} from './style';
import Boy from './components/boy';
import Girl from './components/girl';
import Message from './components/message';
import Me from '../user/components/me';

class Dashboard extends PureComponent {
	componentDidMount() {
		if (!this.props.chatMsg.length) {
			this.props.getMsgList();
			this.props.recvMess();
		}
	}

	render() {
		const {
			sex
		} = this.props;
		const navList = [{
			path: '/boy',
			text: 'girl',
			icon: 'boy',
			title: '女列表',
			component: Boy,
			hide: sex === 'girl'
		}, {
			path: '/girl',
			text: 'boy',
			icon: 'girl',
			title: '男列表',
			component: Girl,
			hide: sex === 'boy'
		}, {
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: Message
		}, {
			path: '/me',
			text: '我',
			icon: 'user',
			title: '个人中心',
			component: Me
		}];
		const pathname = this.props.location.pathname;
		const findValue = navList.find((value) => value.path === pathname);
		return (<DashboardWrapper>
			<NavBar className='fixed-top' mode="dark">{findValue ? findValue.title : '无'}</NavBar>
			<div className='DashboardContentWrapper'>
			<Switch>
			{navList.map((v) => (<Route key={v.path} path={v.path} component={v.component}/>))}
			</Switch>
			</div>
			<NavTabBar data={navList} badge={this.props.unread}/>
			</DashboardWrapper>);
	}
}

const mapState = (state) => {
	return {
		sex: state.getIn(['user', 'sex']),
		unread: state.getIn(['chat', 'unread']),
		chatMsg: state.getIn(['chat', 'chatMsg'])
	};
};

const mapDispatch = (dispatch) => {
	return {
		getMsgList() {
			dispatch(actionCreators.getMsgList());
		},

		recvMess() {
			dispatch(actionCreators.recvMess());
		}
	};
};

export default connect(mapState, mapDispatch)(Dashboard);