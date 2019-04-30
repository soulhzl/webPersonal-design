import styled from 'styled-components';
import bannerPic from '../../statics/banner-1.jpg';

export const HomeWrapper = styled.div`
width: 960px;
margin: 0 auto;
overflow: hidden;
`;

export const HomeLeft = styled.div`
float: left;
width: 625px;
margin-left: 15px;
padding-top: 30px;
.banner-img{
	width: 100%;
	height: 390px;
	background-image: url(${bannerPic});
	background-size: contain;
	border-radius: 10px;
}
`;

export const HomeRight = styled.div`
float: right;
width: 240px;
`;

export const TopicWrapper = styled.div`
margin-left: -20px;
padding: 20px 0 10px 0;
overflow: hidden;
border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
float: left;
height: 32px;
padding-right: 10px;
margin-left: 23px;
margin-bottom: 10px;
background-color: #f7f7f7;
font-size: 14px;
line-height: 32px;
color: #000;
border: 1px solid #dcdcdc;
border-radius: 4px;
.topic-img{
	float: left;
	width: 55px;
	height: 100%;
	margin-right: 10px;
	background-size: cover;
}
`;

export const ListItem = styled.div`
padding: 20px 0;
border-bottom: 1px solid #dcdcdc;
overflow: hidden;
.list-img{
	float: right;
	width: 125px;
	height: 80px;
}
`;

export const ListInfo = styled.div`
float: left;
width: 500px;
.title{
	font-size: 18px;
	font-weight: bold;
	line-height: 27px;
	color: #333;
}
.desc{
	font-size: 13px;
	line-height: 24px;
	color: #999;
}
`;

export const LoadMore = styled.div`
width: 100%;
height: 40px;
margin: 30px 0;
line-height: 40px;
background-color: #a5a5a5;
color: #fff;
text-align: center;
border-radius: 20px;
cursor: pointer;
`;

export const RecommendWrapper = styled.div`
margin: 30px 0;
width: 240px;
`;

export const RecommendItem = styled.div`
width: 100%;
height: 50px;
margin-bottom: 5px;
background: url(${(props) => props.imgUrl});
background-size: cover;
border-radius: 5px;
`;

export const WriterWrapper = styled.div`
width: 238px;
padding: 5px;
border-radius: 3px;
`;

export const WriterItem = styled.div`
width: 100%;
height: 48px;
margin-bottom: 10px;
.writer-img{
	float: left;
	width: 48px;
	height: 100%;
}
`;

export const WriterItemInfo = styled.div`
float: right;
width: 180px;
h4{
	display: inline-block;
	color: #333;
	font-size: 14px;
	margin-top: 5px;
}
p{
	color: #969696;
	font-size: 12px;
	margin-top: 10px;  
}
span{
	float: right;
	margin-right: 5px;
	font-size: 13px;
	color: #42c02e;
}
`;

export const BackTop = styled.div`
position: fixed;
right: 100px;
bottom: 100px;
width: 60px;
height: 60px;
font-size: 14px;
line-height: 60px;
border: 1px solid #ccc;
text-align: center;
`;

