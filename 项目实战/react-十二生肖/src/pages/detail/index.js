import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	DetailWrapper,
	DetailContent
} from './style';

class Login extends PureComponent {
	componentDidMount() {
		console.log(this.props.match.params.id);
	}

	render() {
		return (
			<DetailWrapper>
			<DetailContent>
			<h1>大标题</h1>
			<p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
			</DetailContent>
			</DetailWrapper>
		);
	}
}

export default Login;