import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent{
	render(){
		const { list } = this.props;

		return (
			<TopicWrapper>
			{
				list.map((item) => {
					return (
						<TopicItem key={item.get('id')}>
						<img alt='' className='topic-img' src={item.get('imgUrl')}/>
						{item.get('title')}
						</TopicItem>
						);
					})
				}
				</TopicWrapper>
				)
			}
		}

		const mapState = (state) => {
			return {
				list: state.getIn(['home', 'topicList'])
			};
		};

		export default connect(mapState, null)(Topic);