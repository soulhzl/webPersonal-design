import React from 'react';
import { Link } from 'react-router-dom';

export default class MobileHeader extends React.Component{
	render(){
		return (
			<header class='mobileheader'>
			<Link to='/reactmyweb'>
			<img src='./src/image/icon.png' alt='logo'/>
			<span>Resume</span>
			</Link>
			</header>
			);
		}
	}

