import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PcNewsBlock from './pc_news_block.js';
import PcNewsImageBlock from './pc_news_image_block.js';

const TabPane = Tabs.TabPane;
export default class PcNewsContainer extends React.Component{
	render(){
		const setting = {
			dots: true,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			speed: 500
		};

		return (
			<div>
			<Row>
			<Col span={2}></Col>
			<Col span={20}>
			<div class='leftContainer'>
			<div class='carousel'>
			<Carousel {...setting}>
			<div><img src='./src/image/1.jpg'/></div>
			<div><img src='./src/image/2.jpg'/></div>
			<div><img src='./src/image/3.jpg'/></div>
			</Carousel>
			<PcNewsImageBlock count={6} type='guoji' width='400px' cartTitle='国际头条' imageWidth='112px'/>
			</div>
			</div>
			<Tabs class='tabs_news'>
			<TabPane tab='新闻' key='1'>
			<PcNewsBlock count={27} type='top' width='100%' bordered='false'/>
			</TabPane>
			</Tabs>
			<PcNewsImageBlock count={14} type='yule' width='100%' cartTitle='娱乐头条' imageWidth='132px'/>
			</Col>
			<Col span={2}></Col>
			</Row>
			</div>
			);
	}
}