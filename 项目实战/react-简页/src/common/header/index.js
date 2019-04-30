import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	CSSTransition
} from 'react-transition-group';
import {
	Link
} from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	Addition,
	Button
} from './style';
import {
	actionCreators
} from './store';
import {
	actionCreators as loginActionCreators
} from '../../pages/login/store';

class Header extends Component {
	getListArea() {
		const {
			focused,
			list,
			page,
			mouseIn,
			totalPage,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		} = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
			}
		}


		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SearchInfoTitle>热门搜索
				<SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}><i className='iconfont spin' ref={(icon) => {this.spinIcon = icon}}>&#xe705;</i>换换换</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
				{pageList}
				</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}

	render() {

		const {
			focused,
			handleInputFocus,
			handleInputBlur,
			list,
			login,
			logout
		} = this.props;

		return (
			<HeaderWrapper>
			<Link to="/">
			<Logo />
			</Link>
			<Nav>
			<NavItem className='left active'><i className='iconfont'>&#xe607;</i>首页</NavItem>
			<NavItem className='left'><i className='iconfont'>&#xe642;</i>下载APP</NavItem>
			{login ? <NavItem onClick={logout} className='right'>注销</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
			<NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
			<SearchWrapper>
			<CSSTransition in={focused} timeout={500} classNames="slide">
			<NavSearch className={focused ? 'focused' : ''} onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur}></NavSearch>
			</CSSTransition>
			<i className={focused ? 'focused iconfont zo+om' : 'iconfont zoom'}>&#xe617;</i>
			{this.getListArea()}
			</SearchWrapper>
			</Nav>
			<Addition>
			<Link to='/write'><Button className='writting'><i className='iconfont'>&#xe624;</i>写文章</Button></Link>
			<Button className='reg'>注册</Button>
			</Addition>
			</HeaderWrapper>
		);
	}
}

const mapState = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	};
};

const mapDispatch = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},

		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},

		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},

		handleChangePage(page, totalPage, spinIcon) {
			let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, "");
			if (originAngle) {
				originAngle = parseInt(originAngle);
			} else {
				originAngle = 0;
			}
			spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}

		},

		logout() {
			dispatch(loginActionCreators.logout());
		}
	};
};

export default connect(mapState, mapDispatch)(Header);