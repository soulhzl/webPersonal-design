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
	NavBar,
	InputItem,
	TextareaItem,
	NoticeBar,
	Button
} from 'antd-mobile';
import {
	actionCreators
} from '../store';
import AvatarSelector from '../../../common/avatarselector';

class BoyInfo extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			avatar: '',
			title: '',
			company: '',
			money: '',
			desc: ''
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
			handleUpdateInfo
		} = this.props;
		const pathname = this.props.location.pathname;
		return (<Fragment>
			{redirectTo !== undefined && redirectTo !== pathname ? <Redirect to={redirectTo}/> : null}
			<NavBar mode="dark">Boy Message</NavBar>
			<AvatarSelector selectAvatar={(imgName) => {
				this.setState({
					avatar: imgName
				});
			}}/>
			<InputItem onChange={(v) => {this.handleChange("title", v)}}>职位</InputItem>
			<InputItem onChange={(v) => {this.handleChange("company", v)}}>公司</InputItem>
			<InputItem onChange={(v) => {this.handleChange("money", v)}}>薪资</InputItem>
			<TextareaItem
			title="职位简介"
			rows={3}
			onChange={(v) => {this.handleChange("desc", v)}}
			autoHeight
			/>
			{msg === '' ? null : <NoticeBar className='notice_bar' marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      		{msg}
    		</NoticeBar>}
			<Button type='primary' onClick={() => {handleUpdateInfo(this.state)}}>保存</Button>
			</Fragment>);
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
		handleUpdateInfo(value) {
			dispatch(actionCreators.handleUpdateInfo(value));
		}
	}
};

export default connect(mapState, mapDispatch)(BoyInfo);