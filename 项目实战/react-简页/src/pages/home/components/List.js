import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{

	render(){
		const { list, getMoreList, articlePage } = this.props;

		return (
			<Fragment>
			{
				list.map((item, index) => {
					return (
						<Link  key={index} to={'/detail/' + item.get('id')}>
						<ListItem>
						<img alt='' className='list-img' src={item.get('imgUrl')}/>
						<ListInfo>
						<h3 className='title'>{item.get('title')}</h3>
						<p className='desc'>{item.get('desc')}</p>
						</ListInfo>
						</ListItem>
						</Link>
						)
				})
			}
			<LoadMore onClick={() => {getMoreList(articlePage)}}>阅读更多</LoadMore>
			</Fragment>
			)
		}
	}

	const mapState = (state) => {
		return {
			list: state.getIn(['home', 'articleList']),
			articlePage: state.getIn(['home', 'articlePage'])
		};
	};

	const mapDispatch = (dispatch) => {
		return {
			getMoreList(page){
				dispatch(actionCreators.getMoreList(page));
			}
		}
	};

	export default connect(mapState, mapDispatch)(List);