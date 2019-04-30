import React, {
	PureComponent
} from 'react';
import {
	LogoWrapper
} from './style';

class Logo extends PureComponent {
	render() {
		const {
			logoImg
		} = this.props;
		return (<LogoWrapper>
			<img src={require(`../../statics/${logoImg}`)} alt='Logo'/>
			</LogoWrapper>);
	}
}

export default Logo;