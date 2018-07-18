import React from 'react';
import MobileHeader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import MobileMain from './mobile_main.js';

import { Switch, Route } from 'react-router-dom';

export default class Mobileindex extends React.Component{
	render(){
		return (
			<div>
			<MobileHeader />
			<main>
			
			<Switch>
			<Route exact path='/reactmyweb' component={MobileMain}/>
			</Switch>

			</main>
			<MobileFooter />
			</div>
			);
		}
	}

