import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem, WriterItemInfo } from '../style';

class Writer extends PureComponent{
	render(){
		const { writerList } = this.props;

		return (<WriterWrapper>
		{
			writerList.map((item) => {
				return (
					<WriterItem key={item.get("id")}>
			<img src={item.get("imgUrl")} alt='' className='writer-img'/>
			<WriterItemInfo>
			<h4>{item.get("title")}</h4>
			<span>+关注</span>
			<p>{item.get("content")}</p>
			</WriterItemInfo>
			</WriterItem>
			);
			})
		}
			</WriterWrapper>)
	}
}

const mapState = (state) => {
	return {
		writerList: state.getIn(['home', 'writerList'])
	};
};

export default connect(mapState, null)(Writer);