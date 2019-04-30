import {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	withRouter
} from 'react-router-dom';
import axios from 'axios';
import {
	actionCreators
} from '../store';

class AuthRoute extends PureComponent {
	componentDidMount() {
		const {
			loadData
		} = this.props;
		const publicList = ['/login', '/register'];
		const pathname = this.props.location.pathname;
		if (publicList.indexOf(pathname) > -1) {
			return null;
		}
		const auth = async () => {
			const res = await axios.get('/user/info');
			if (res.status === 200) {
				if (res.data.code === 0) {
					loadData(res.data.data);
				} else {
					this.props.history.push('/login');
				}
			}
		};
		auth();
	}
	render() {
		return null;
	}
}

const mapDispatch = (dispatch) => {
	return {
		loadData(data) {
			dispatch(actionCreators.loadData(data));
		}
	};
};

export default connect(null, mapDispatch)(withRouter(AuthRoute));