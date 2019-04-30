import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent{

	render(){
		const { login } = this.props;

		if (login) {
		return (<div>写文章页面</div>);
		}else{
			return (<Redirect to='/'/>);
		}
	}
}

const mapState = (state) => ({
	login: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);