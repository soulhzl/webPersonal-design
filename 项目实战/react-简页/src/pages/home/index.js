import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';

class Home extends PureComponent{
	backToTop(){
		window.scrollTo(0, 0);
	}

	bindEvent(){
		window.addEventListener('scroll', this.props.changeScrollShow);
	}

	componentDidMount(){
		this.props.initHomeData();
		this.bindEvent();
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.changeScrollShow);
	}

	render(){
		const { showScroll } = this.props;

		return (
			<HomeWrapper>
			<HomeLeft>
			<img alt='' className='banner-img'/>
			<Topic />
			<List />
			</HomeLeft>
			<HomeRight>
			<Recommend />
			<Writer />
			</HomeRight>
			{ showScroll ? (<BackTop onClick={this.backToTop}>回到顶部</BackTop>) : null }
			</HomeWrapper>
			)
	}
}

const mapState = (state) => {
	return {
		showScroll: state.getIn(['home', 'showScroll'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		initHomeData(){
			dispatch(actionCreators.getHomeData());
		},

		changeScrollShow(){
			if (document.documentElement.scrollTop > 400) {
				dispatch(actionCreators.toggleScroll(true));
			}else{
				dispatch(actionCreators.toggleScroll(false));
			}
		}
	}
}

export default connect(mapState, mapDispatch)(Home);