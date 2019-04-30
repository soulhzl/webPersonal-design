import React, {
	PureComponent
} from 'react';
import {
	TabBar
} from 'antd-mobile';
import {
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavTabBar extends PureComponent {
	static propTypes = {
		data: PropTypes.array.isRequired
	}

	render() {
		const filterData = this.props.data.filter((v) => !v.hide);
		const {
			pathname
		} = this.props.location;
		return (
			<TabBar>
				{filterData.map((v) => (
					 <TabBar.Item
					 	badge={v.path === '/msg' ? this.props.badge : 0}
						key={v.path}
						title={v.text}
						icon={{uri: require(`../../../statics/${v.icon}.png`)}}
						selectedIcon={{uri: require(`../../../statics/${v.icon}-active.png`)}}
						selected={pathname===v.path}
						onPress={()=>{
							this.props.history.push(v.path)
						}}
					>
					
					</TabBar.Item>
				))}
				</TabBar>
		);
	}
}

export default withRouter(NavTabBar);