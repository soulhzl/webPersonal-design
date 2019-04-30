import styled from 'styled-components';
import sectionOnePic1 from '../../statics/page1-role1.png';
import sectionOnePic2 from '../../statics/page1-bg1.jpg';
import sectionOnePic3 from '../../statics/page1-bg1.png';
import sectionOnePic4 from '../../statics/page1-logo.png';
import sectionOnePic5 from '../../statics/page1-slogan.png';
import sectionOnePic6 from '../../statics/page1-role2.png';
import sectionOnePic7 from '../../statics/order-btn3.png';
import sectionOnePic8 from '../../statics/load-btn1.png';
import sectionOnePic9 from '../../statics/page1-right.png';
import sectionTwoPic1 from '../../statics/header-img1.jpg';

export const SectionWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const SectionOneBg = styled.div`
position: absolute;
left: 50%;
width: 1920px;
height: 748px;
margin-left: -960px; 
background-image: url(${sectionOnePic1});
`;

export const SectionOneFirstBg = styled.div`
position absolute;
left: 50%;
width: 1920px;
height: 100vh;
margin-left: -960px; 
background-image: url(${sectionOnePic2});
background-size: cover;
z-index: -10;
`;

export const SectionOneSecondBg = styled.div`
position absolute;
left: 50%;
width: 1920px;
height: 897px;
margin-left: -960px; 
background-image: url(${sectionOnePic3});
background-size: cover;
z-index: 100;
`;

export const SectionOneThirdBg = styled.div`
position absolute;
top: 100px;
left: 50%;
width: 219px;
height: 124px;
margin-left: 270px;
background-image: url(${sectionOnePic4});
z-index: 100;
`;

export const SectionOneFourth = styled.div`
position absolute;
left: 50%;
bottom: 200px;
width: 706px;
height: 281px;
margin-left: -353px;
`;

export const SectionOneFourthBg = styled.div`
position absolute;
left: 50%;
width: 706px;
height: 281px;
margin-left: -353px;
background-image: url(${sectionOnePic5});
z-index: 300;
`;

export const SectionOneFourSonOne = styled.div`
position absolute;
right: -143px;
bottom: 20px;
width: 175px;
height: 214px;
background-image: url(${sectionOnePic6});
z-index: 200;
`;

export const SectionOneFourSonTwo = styled.div`
position absolute;
left: 442px;
top: 32px;
width: 40px;
height: 40px;
background-image: url(${sectionOnePic9});
background-position: right bottom;
z-index: 300;
cursor: pointer;
`;

export const SectionOnefifthBg = styled.div`
position absolute;
left: 50%;
bottom: 80px;
width: 357px;
height: 172px;
margin-left: -165px;
background-image: url(${sectionOnePic7});
z-index: 300;
`;

export const SectionOnefifthSonBg = styled.div`
position absolute;
top: 80px;
left: 160px;
width: 145px;
height: 42px;
background-image: url(${sectionOnePic8});
z-index: 300;
cursor: pointer;
`;

export const SectionTwoBg = styled.div`
position: absolute;
left: 50%;
width: 1920px;
height: 100vh;
margin-left: -960px; 
background-image: url(${sectionTwoPic1});
background-size: cover;
`;