import React, { PureComponent } from 'react';
import { HeaderWrapper, HeaderContainer, LogoWrapper, LogoPic, LogoContent, OfficalButton } from './style';

class Header extends PureComponent{
	render(){
		return (
			<HeaderWrapper>
			<HeaderContainer>
			<LogoWrapper>
			<LogoPic>
			</LogoPic>
			<LogoContent>
			《航海王：燃烧意志》<br/>
			<span>官方正版授权</span>
			</LogoContent>
			</LogoWrapper>
			<OfficalButton>
			</OfficalButton>
			</HeaderContainer>
			</HeaderWrapper>
			);
	}
} 

export default Header;