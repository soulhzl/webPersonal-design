import styled from 'styled-components';

export const HomeWrapper = styled.div `
min-width: 768px;
max-width: 1440px;
margin: 0 auto;
`;

export const CarouselWrapper = styled.div `
display: inline-block;
width: 640px;
:after{
	content: '';
	display: block;
	clear: both;
	visibility: hidden;
	height: 0;
}
`;

export const CarouselNav = styled.div `
float: left;
width: 100px;
margin-left: 80px;
`;

export const NavItem = styled.div `
width: 100%;
height: 30px;
margin: 10px 0;
padding: 4px;
color: #999;
font-size: 16px;
border: 1px solid #e0e0e0;
border-radius: 15px;
cursor: pointer;
&.selected{
	border: 1px solid red;
}
.icon {
	float: left;
	width: 30px;
	height: 30px;
	line-height: 30px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
.mar-left{
	margin-left: 10px;
}
.describe{
	float: left;
	height: 30px;
	line-height: 30px;
	margin: 0 2px;
}
`;

export const CarouselPic = styled.img `
float: left;
width: 429px;
height: 606px;
margin-left: 30px;
border-radius: 20px;
`;

export const NewWrapper = styled.div `
float: left;
width: 760px;
box-sizing: border-box;
padding-left: 20px;
`;

export const NewTitle = styled.div `
width: 100%;
font-size: 30px;
text-align: center;
font-weight: bold;
margin: 60px 0;
`;

export const NewpIC = styled.img `
width: 751px;
height: 368px;
border: 2px solid #e0e0e0;
border-radius: 20px;
`;

export const ListWrapper = styled.div `
width: 810px;
margin: 50px 0 20px 80px;
`;

export const ListItem = styled.div `
margin-bottom: 20px;
padding: 10px;
background-color: #eee;
box-sizing: border-box;
border: 1px solid #aaa;
border-radius: 5px;
:after{
	content: '';
	display: block;
	clear: both;
	visibility: hidden;
	height: 0;
}
img{
	float: right;
	width: 150px;
	height: 80px;
	margin: 0 10px;
	border-radius: 5px;
}
`;

export const ListContent = styled.div `
float: left;
width: 600px;
h3{
	margin-bottom: 20px; 
	font-size: 20px;
	font-weight: bold;
}
p{
	width: 650px;
	font-size: 14px;
	color: #aaa;
}
`;