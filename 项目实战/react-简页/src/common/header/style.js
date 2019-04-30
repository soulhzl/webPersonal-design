import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	background-color: #f7f4ed;
	border-bottom: 1px solid #F0F0F0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 70px;
	height 56px;
	margin-left: 40px;
	background: url(${logoPic});
	background-size: cover;
`;

export const Nav = styled.div`
	width: 968px;
	height: 100%;
	padding-right: 70px;
	margin: 0 auto;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	padding: 0 15px;
	font-size: 16px;
	color: #333;
	line-height: 56px;
	cursor: pointer;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color: #969696;
	}
	&.active{
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom{
		position: absolute;
		right: 3px;
		bottom: 3px;
		width: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		&.focused{
			background-color: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 36px;
	padding: 0 30px 0 20px;
	margin-top: 10px;
	margin-left: 10px;
	background: #eee;
	color: #777;
	font-size: 12px;
	box-sizing: border-box;
	border: none;
	border-radius: 19px;
	outline: none;
	&.slide-enter{
		transition: all 0.5s ease-out;
	}
	&.slide-enter-active{
		width: 250px;
	}
	&.slide-exit{
		transition: all 0.5s ease-out;
	}
	&.slide-exit-active{
		width: 160px;
	}
	&::placeholder{
		color: #999;
	}
	&.focused{
		width: 250px;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	background-color: white;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin{
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all 0.5s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	float: left;
	padding: 0 5px;
	margin-left: 10px;
	margin-bottom: 10px;
	color: #787878;
	font-size: 12px;
	line-height: 20px;
	border: 1px solid #ddd;
	border-radius: 3px;
`;

export const Addition = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	height: 38px;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border: 1px solid #ec6149;
	border-radius: 19px;
	font-size: 14px;
	cursor: pointer;
	&.reg{
		color: #ec6149;
	}
	&.writting{
		color: #fff;
		background-color: #ec6149;
	}
`;