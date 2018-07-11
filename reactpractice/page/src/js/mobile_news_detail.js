import React from 'react';
import { Row, Col, BackTop } from 'antd';
import CommonComments from './common_comments.js';
export default class MobileNewsDetails extends React.Component{
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
			<div id='mobileDetailsContainer'>
			<div>
			<Row>
			<Col span={24} className='container'>
			<div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
			<CommonComments uniquekey={this.props.match.params.uniquekey}/>
			</Col>
			</Row>
			</div>
			<BackTop />
			</div>
			)
		}
	}