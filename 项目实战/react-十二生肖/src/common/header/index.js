import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, FestivalWrapper, FunctionWrapper, LoginWrapper, LoginItem } from './style';

class Header extends PureComponent{
	render(){
		return (<HeaderWrapper>
			<Link to='/'>
			<FestivalWrapper className="clearfix">
			<svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-spring"></use>'}}></svg>
			<svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-festival"></use>'}}></svg>
			<svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-chinese_lion"></use>'}}></svg>
			</FestivalWrapper>
			</Link>
			<FunctionWrapper>
			</FunctionWrapper>
			<LoginWrapper>
			<svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-boy"></use>'}}></svg>
			<Link to='/login'>
			<LoginItem>登录</LoginItem>
			</Link>
			<svg className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: '<use xlink:href="#icon-girl"></use>'}}></svg>
			</LoginWrapper>
			</HeaderWrapper>);
		}
	}

	export default Header;