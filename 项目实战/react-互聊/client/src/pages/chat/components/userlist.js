import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	WingBlank,
	WhiteSpace,
	Card
} from 'antd-mobile';
import {
	withRouter
} from 'react-router-dom';

class UserList extends PureComponent {
	handleClick(v) {
		this.props.history.push(`chat/${v._id}`);
	}

	render() {
		const {
			list
		} = this.props;
		const CardHeader = Card.Header;
		const CardBody = Card.Body;
		return (<WingBlank>
				{list.map((v) => (v.avatar ? (<Fragment key={v._id}><WhiteSpace/><Card onClick={() => {this.handleClick(v)}}>
				<CardHeader
				title={v.user}
				thumb={require(`../../../statics/${v.avatar}.jpg`)}
				extra={<span>{v.title}</span>}
				thumbStyle={{width: 40,height:40}}
				/>
				<CardBody>
				{v.sex === 'boy' ? <div>公司：{v.company}</div> : null}
				{v.desc.split('\n').map((d) => (<div key={d}>{d}</div>))}
				{v.sex === 'boy' ? <div>薪资：{v.money}</div> : null}
				</CardBody>
				</Card></Fragment>) : null))}
				<WhiteSpace/>
				</WingBlank>);
	}
}

export default withRouter(UserList);