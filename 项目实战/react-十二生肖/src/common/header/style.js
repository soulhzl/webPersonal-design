import styled from 'styled-components';

export const HeaderWrapper = styled.div`
height: 56px;
min-width: 768px;
max-width: 1440px;
margin: 0 auto 10px;
border-bottom: 1px solid #d0d0d0;
`;

export const FestivalWrapper = styled.div`
float: left;
width: 168px;
height: 56px;
margin-left: 20px;
cursor: pointer;
.icon {
	width: 40px;
	height: 40px;
	margin: 8px 0;
	line-height: 56px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
`;

export const FunctionWrapper = styled.div`
float: left;
width: calc(100% - 368px);
height: 56px;
`;

export const LoginWrapper = styled.div`
float: left;
width: 180px;
height: 56px;
.icon {
	float: left;
	width: 40px;
	height: 40px;
	margin: 8px 0;
	line-height: 56px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
`;

export const LoginItem = styled.div`
float: left;
width: 80px;
height: 40px;
box-sizing: border-box;
margin-top: 7px;
color: #aaa;
line-height: 40px;
text-align: center;
border: 1px solid #e0e0e0;
border-radius: 20px;
cursor: pointer;
`;