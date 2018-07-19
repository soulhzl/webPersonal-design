import React from 'react';
import { Row, Col, Carousel } from 'antd';
import PcPerson from './pc_person.js';
import PcResume from './pc_resume.js';

export default class PcMain extends React.Component{
	componentDidMount(){
		document.body.style.backgroundColor = 'white';
	}
	
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
			<div class='container'>
			<div class='left-container'>
			<Carousel {...setting}>
			<div><img src='./src/image/gjmail.png'/></div>
			<div><img src='./src/image/gjfile.png'/></div>
			<div><a target="_blank" href="http://www.g-jack.com/"><img src='./src/image/gjweb.png'/></a></div>
			</Carousel>
			</div>
			<PcPerson />
			</div>
			</Col>
			<Col span={2}></Col>
			</Row>
			<PcResume />
			</div>
			);
	}
}