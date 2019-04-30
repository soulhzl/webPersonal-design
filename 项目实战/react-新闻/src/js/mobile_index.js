import React from 'react';
import MobileHeader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import MobileNews from './mobile_news.js';
import MobileNewsDetails from './mobile_news_detail.js';
import MobileUserCenter from './mobile_usercenter.js';

import { Switch, Route } from 'react-router-dom';

export default class Mobileindex extends React.Component{
	render(){
		return (
			<div>
			<MobileHeader />
			<main>
			
			<Switch>
			<Route exact path='/page' component={MobileNews}/>
			<Route path='/details/:uniquekey' component={MobileNewsDetails}/>
			<Route path='/usercenter' component={MobileUserCenter}/>
			</Switch>

			</main>
			<MobileFooter />
			</div>
			);
		}
	}

