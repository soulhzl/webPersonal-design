import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	actionCreators
} from '../store';
import UserList from './userlist';

class Boy extends PureComponent {
	componentDidMount() {
		this.props.handleUpdateList('girl');
	}

	render() {
		const {
			list
		} = this.props;

		return (<UserList list={list}/>);
	}
}

const mapState = (state) => ({
	list: state.getIn(['chat', 'list'])
});

const mapDispatch = (dispatch) => {
	return {
		handleUpdateList(data) {
			dispatch(actionCreators.handleUpdateList(data));
		}
	}
};

export default connect(mapState, mapDispatch)(Boy);