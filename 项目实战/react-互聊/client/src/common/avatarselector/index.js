import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	Grid,
	List
} from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends PureComponent {
	static propTypes = {
		selectAvatar: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			icon: '',
			text: ''
		};
	}

	render() {
		const data = Array.from(new Array(12)).map((v, i) => ({
			icon: require(`../../statics/avatar${i+1}.jpg`),
			text: `avatar${i+1}`,
		}));
		const AvatarHeader = this.state.icon ? <div><span style={{marginRight: '8px'}}>已选头像:</span><img style={{width: '75px', height: '75px'}} src={this.state.icon} alt=''/></div> : <div>请选择头像</div>;
		return (<Fragment>
				<List renderHeader={() => AvatarHeader}>
				<Grid onClick={(ele) => {this.setState(ele);this.props.selectAvatar(ele.text);}} data={data} activeStyle={false} renderItem={data => (
				<div style={{ margin: '2px 0' }}>
				<img src={data.icon} style={{ width: '75px', height: '75px' }} alt="" />
				</div>
				)}/>
				</List>
				</Fragment>);
	}
}

export default AvatarSelector;