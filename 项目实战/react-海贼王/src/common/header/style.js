import styled from 'styled-components';
import navIconPic from '../../statics/icon.png';
import entryBtnPic from '../../statics/entry-btn.png';

export const HeaderWrapper = styled.div`
position: fixed;
top: 0;
width: 100%;
height: 108px;
background: rgba(0, 0, 0, 0.7);
z-index: 10;
`;

export const HeaderContainer = styled.div`
width: 1200px;
height: 100%;
margin: 0 auto;
`;

export const LogoWrapper = styled.div``;

export const LogoPic = styled.div`
float: left;
width: 108px;
height: 108px;
background-image: url(${navIconPic});
`;

export const LogoContent = styled.p`
float: left;
margin: 20px 5px 0 0;
color: #fff;
font-size: 24px;
span{
	margin-left: 10px;
	color: #cacaca;
	font-size: 14px;
}
`;

export const OfficalButton = styled.div`
float: right;
width: 221px;
height: 95px;
margin-top: 6px;
background-image: url(${entryBtnPic});
cursor: pointer;
`;
