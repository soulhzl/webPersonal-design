import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	actionCreators
} from '../store';
import {
	List,
	InputItem,
	NavBar,
	Icon,
	Grid
} from 'antd-mobile';
import {
	ChatContentWrapper,
	ChatFooterWrapper
} from '../style';
import {
	getChatId
} from '../../../util';

class Chat extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		if (!this.props.chatMsg.length && this.props.history.action === 'POP') {
			this.props.getMsgList('chat');
			this.props.recvMess();
		}
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 50);
	}

	componentWillUnmount() {
		const to = this.props.match.params.user;
		this.props.readMess(to);
	}

	handleClick() {
		const from = this.props._id;
		const to = this.props.match.params.user;
		const msg = this.state.text;
		this.props.sendMess(from, to, msg);
		this.setState({
			text: ''
		});
	}

	render() {
		const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
			.split(' ')
			.filter(v => v)
			.map(v => ({
				text: v
			}));
		const userId = this.props.match.params.user;
		const Item = List.Item;
		const {
			users
		} = this.props;
		if (!users[userId]) {
			return null;
		}
		const chatId = getChatId(userId, this.props._id);
		const chatMsgs = this.props.chatMsg.filter(v => v.chatid === chatId);
		return (<Fragment>
			<ChatContentWrapper>
			<NavBar mode='dark' icon={<Icon type='left'/>} onLeftClick={() => {this.props.history.goBack()}}>
			{users[userId].name}
			</NavBar>
			<List>
			{chatMsgs.map((v) => {const avatar = require(`../../../statics/${users[v.from].avatar}.jpg`);return v.from === userId ? (<Item thumb={avatar} key={v._id}>{v.content}</Item>) : (<Item key={v._id} extra={<img src={avatar} alt=''/>} className='me'>{v.content}</Item>)})}
			</List>
			</ChatContentWrapper>
			<ChatFooterWrapper>
			<List>
			<InputItem placeholder='请输入' value={this.state.text} onChange={(v) => {this.setState({text: v})}} extra={<span onClick={this.handleClick}>发送</span>}/>
			</List>
			<Grid data={emoji} columnNum={9} carouselMaxRow={4} isCarousel={true} onClick={el => {this.setState({text: this.state.text + el.text});}}/>
			</ChatFooterWrapper>
			</Fragment>);
	}
}

const mapState = (state) => {
	return {
		_id: state.getIn(['user', '_id']),
		chatMsg: state.getIn(['chat', 'chatMsg']),
		users: state.getIn(['chat', 'users']),
	};
};

const mapDispatch = (dispatch) => {
	return {
		sendMess(from, to, msg) {
			dispatch(actionCreators.sendMess(from, to, msg));
		},

		getMsgList(url) {
			dispatch(actionCreators.getMsgList(url));
		},

		recvMess() {
			dispatch(actionCreators.recvMess());
		},

		readMess(to) {
			dispatch(actionCreators.readMess(to));
		}
	};
};

export default connect(mapState, mapDispatch)(Chat);