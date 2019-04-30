import styled from 'styled-components';

export const LoginWrapper = styled.div `
position: absolute;
left: 50%;
top: 50%;
width: 400px;
height: 500px;
margin-left: -200px;
margin-top: -250px;
background-color: #eee;
border: 1px solid #bbb;
border-radius: 5px;
box-shadow: 0 00 8px #888888;
`;

export const LoginSelectArea = styled.div `
margin: 50px 0 50px 0;
font-size: 20px;
text-align: center;
span{
	margin: 0 20px;
	cursor: pointer;
}
.selected{
	padding-bottom: 8px;
	color: red;
	border-bottom: 1px solid red;
}
`;

export const LoginMainArea = styled.div `
width: 300px;
margin: 0 auto;
text-align: center;
input{
	width: 250px;
	height: 30px;
	padding: 10px
	border: 1px solid #eee;
	font-size: 20px;
}
input:nth-of-type(1){
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
input:nth-of-type(2){
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
}
button{
	width: 270px;
	height: 40px;
	line-height: 30px;
	margin-top: 40px;
	border-radius: 20px;
	border: none;
	font-size: 20px;
	color: #fff;
	background-color: #3194d0;
	cursor: pointer;
}
`;

export const RegMainArea = styled.div `
width: 300px;
margin: 0 auto;
text-align: center;
input{
	width: 250px;
	height: 30px;
	padding: 10px
	border: 1px solid #eee;
	font-size: 20px;
}
input:nth-of-type(1){
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
input:nth-of-type(3){
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
}
button{
	width: 270px;
	height: 40px;
	line-height: 30px;
	margin-top: 40px;
	border-radius: 20px;
	border: none;
	font-size: 20px;
	color: #fff;
	background-color: #28ff28;
	cursor: pointer;
}
`;

export const IconArea = styled.div `
width: 100%;
height: 40px;
margin: 20px auto 0; 
.icon {
	display: inline-block;
	width: 40px;
	height: 40px;
	margin: 0 5px;
	line-height: 40px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
`