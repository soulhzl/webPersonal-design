import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

class Detail extends PureComponent{
	componentDidMount(){
		this.props.getDetailList(this.props.match.params.id);
	}

	render(){
		const { title, content } = this.props;

		return (<DetailWrapper>
			<Header>{title}</Header>
			<Content dangerouslySetInnerHTML={{__html: content}} />
			</DetailWrapper>);
	}
}

const mapState = (state) => {
	return {
		title: state.getIn(["detail", "title"]),
		content: state.getIn(["detail", "content"])
	}
};

const mapDispatch = (dispatch) => {
	return {
		getDetailList(id){
			dispatch(actionCreators.getDetailList(id));
		}
	}
};

export default connect(mapState, mapDispatch)(withRouter(Detail));