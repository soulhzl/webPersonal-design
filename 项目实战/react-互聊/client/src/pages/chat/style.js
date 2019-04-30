import styled from 'styled-components';

export const DashboardWrapper = styled.div `
position: absolute;
width: 100%;
.fixed-top{
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;
}
.DashboardContentWrapper{
	width: 100%;
	margin-top: 45px;
	margin-bottom: 50px;
}
.am-tabs-tab-bar-wrap{
	position: fixed;
	z-index: 10;
	bottom: 0;
	width: 100%;
}
`;

export const ChatContentWrapper = styled.div `
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 44px;
width: 100%;
overflow: hidden;
.am-list{
	height: calc(100% - 186px);
	overflow: scroll;
}
.am-list-body,
.am-list-item,
.am-list-body::after{
	background-color: rgb(245, 245, 249) !important;
}
.me .am-list-content{
	margin-right: 6px;
	text-align: right !important;
}
.am-list-extra{
	-webkit-flex-basis: 44px !important;
	flex-basis: 44px !important;
	padding: 0 !important;
	width: 44px !important;
	height: 44px !important;
}
.am-list-thumb img,
.am-list-extra img{
	width: 38px !important;
	height: 38px !important;
}
.am-list-extra img{
	margin-top: 3px;
}
`;

export const ChatFooterWrapper = styled.div `
position: absolute;
z-index:10;
bottom: 0;
width:100%;
.am-grid-icon{
	display: none;
}
.am-grid-text{
	margin-top: 0;
}
`;

export const MessageWrapper = styled.div `
.am-list-thumb img{
	width: 38px !important;
	height: 38px !important;
}
`;