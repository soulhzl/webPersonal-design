import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	List,
	Badge
} from 'antd-mobile';
import {
	MessageWrapper
} from '../style';

class Message extends PureComponent {

	render() {
		const {
			_id,
			chatMsg,
			users
		} = this.props;
		if (!chatMsg.length) {
			return null;
		}
		const msgGroup = {};
		const chatMsgs = chatMsg.filter(v => {
			return v.to === _id || v.from === _id
		});
		chatMsgs.forEach((v) => {
			msgGroup[v.chatid] = msgGroup[v.chatid] || [];
			msgGroup[v.chatid].push(v);
		});
		const chatList = Object.values(msgGroup).sort((a, b) => {
			const a_last = a[a.length - 1].create_time;
			const b_last = b[b.length - 1].create_time;
			return b_last - a_last;
		});
		const Item = List.Item;
		const Brief = Item.Brief;
		return (<MessageWrapper>
			{chatList.map(v => {
				const lastItem = v[v.length-1];
				const targetId = v[0].from === _id?v[0].to:v[0].from;
				const avatar = require(`../../../statics/${users[targetId].avatar}.jpg`);
				const unreadNum = v.filter(v=>!v.read&&v.to===_id).length;
				return (<List key={lastItem._id}><Item arrow="horizontal" onClick={() => {this.props.history.push(`/chat/${targetId}`)}} extra={<Badge text={unreadNum}></Badge>} thumb={avatar}>{lastItem.content}<Brief>{users[targetId].name}</Brief></Item></List>);
			})}
		</MessageWrapper>);
	}
}

const mapState = (state) => {
	return {
		_id: state.getIn(['user', '_id']),
		chatMsg: state.getIn(['chat', 'chatMsg']),
		users: state.getIn(['chat', 'users'])
	};
};

export default connect(mapState)(Message);