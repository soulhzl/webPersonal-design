import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Redirect
} from 'react-router-dom';
import {
	Result,
	List,
	WhiteSpace,
	Modal
} from 'antd-mobile';
import browserCookies from 'browser-cookies';
import {
	actionCreators
} from '../store';

class Me extends PureComponent {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		const alert = Modal.alert;
		alert('注销', '确认退出登录吗？？？', [{
			text: '取消'
		}, {
			text: '确认',
			onPress: () => {
				browserCookies.erase('userid');
				this.props.handleLogoutSub();
			}
		}])
	}

	render() {
		const {
			user
		} = this.props;
		const Item = List.Item;
		const Brief = Item.Brief;
		return user.get('user') ? (<Fragment><Result
				img={<img alt='' style={{width: 60, height: 60}} src={require(`../../../statics/${user.get('avatar')}.jpg`)}/>}
				title={user.get('user')}
				message={user.get('sex') === 'boy' ? <div>{user.get('company')}</div> : null}
				/>
				<List renderHeader={() => '简介'}>
				<Item multipleLine>
				{user.get('title')}
				{user.get('desc').split('\n').map((v) => (<Brief key={v}>{v}</Brief>))}
				{user.get('money')? (<Brief key={user.get('money')}>薪资：{user.get('money')}</Brief>) : null}
				</Item>
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
				<Item onClick={this.handleLogout}>退出登录</Item>
				</List>
				</Fragment>) : (<Redirect to='/login'/>);
	}
}

const mapState = (state) => ({
	user: state.getIn(['user'])
});

const mapDispatch = (dispatch) => {
	return {
		handleLogoutSub() {
			dispatch(actionCreators.handleLogoutSub());
		}
	};
};

export default connect(mapState, mapDispatch)(Me);