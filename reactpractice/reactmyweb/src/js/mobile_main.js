import React from 'react';
import { Carousel, Card } from 'antd';

export default class MobileMain extends React.Component{
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
			<Carousel {...setting}>
			<div><img src='./src/image/gjmail.png'/></div>
			<div><img src='./src/image/gjfile.png'/></div>
			<div><img src='./src/image/gjweb.png'/></div>
			</Carousel>
			<div class='mycard'>
			<Card title="个人信息" bordered={true}>
			<img src="./src/image/myself.jpg"/>
			<p>
			手机：13650130829<br />
			QQ：574114947<br />
			微信：574114947<br />
			邮箱：h574114947zl@163.com<br />
			</p>
			</Card>
			<Card title="工作经历" bordered={true}>
			<p>
			东莞市易普达数码科技有限公司	测试工程师 2017-01 至 2017-03<br />
			内容：对普通平板与通话平板的软件发行进行测试，根据客户需要向工程师提出软件研发需求，对软件进行测试。<br />
			智嘉通讯科技(东莞)有限公司	助理工程师
			2017-07 至 今<br />
			内容：运用html、css、js以及php按上头需求制作公司内部网页，对网页进行维护。<br />
			</p>
			</Card>
			<Card title="个人介绍&职业技能" bordered={true}>
			<p>
			个人比较内向，但乐于助人，当认识到自己做得不足的地方会加以改正，做事比较有耐心，有较强的团队意识，我认为没有做不成的事，只要有心就没难事。<br />
			熟悉html、css与html5、css3，熟悉响应式页面制作，熟悉javascript，熟悉php，熟悉bootstrap框架，熟悉jquery框架，了解ES6语法。
			</p>
			</Card>
			</div>
			</div>
			);
	}
}