import React from 'react';
import { Row, Col, BackTop } from 'antd';
import PcNewsImageBlock from './pc_news_image_block.js';
import CommonComments from './common_comments.js';

export default class PcNewsDetails extends React.Component{
	constructor(){
		super();
		this.state = {
			newsItem: ''
		};
	}

	componentDidMount(){
		let myFetchOptions = {
			method: 'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		});
	}

	createMarkup(){
		return {__html: this.state.newsItem.pagecontent};
	}

	render(){
		return (
			<div>
			<Row>
			<Col span={2}></Col>
			<Col span={14} className='container'>
			<div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
			<CommonComments uniquekey={this.props.match.params.uniquekey}/>
			</Col>
			<Col span={6}>
			<PcNewsImageBlock count={20} type='top' width='100%' cartTitle='顶尖新闻' imageWidth='140px'/>
			</Col>
			<Col span={2}></Col>
			</Row>
			<BackTop />
			</div>
			)
		}
	}