import React from 'react';
import MobileList from './mobile_list.js';
import { Tabs, Carousel } from 'antd';
import MobileListPullRefresh from './mobile_list_pull_refresh.js';
const TabPane = Tabs.TabPane;

export default class MobileNews extends React.Component{
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
			<Tabs>
			<TabPane tab='第一' key='1'>
			<Carousel {...setting}>
			<div><img src='./src/image/1.jpg'/></div>
			<div><img src='./src/image/2.jpg'/></div>
			<div><img src='./src/image/3.jpg'/></div>
			</Carousel>
			<MobileList count={5} type='top'/>
			</TabPane>
			<TabPane tab='第二' key='2'>
			<MobileList count={5} type='shehui'/>
			</TabPane>
			<TabPane tab='第三' key='3'>
			<MobileListPullRefresh count={5} type='yule'/>
			</TabPane>
			<TabPane tab='第四' key='4'>
			<MobileList count={5} type='guonei'/>
			</TabPane>
			<TabPane tab='第五' key='5'>
			<MobileList count={5} type='top'/>
			</TabPane>
			</Tabs>
			</div>
			);
		}
	}

