import React from 'react';
import PcHeader from './pc_header.js';
import PcFooter from './pc_footer.js';
import PcNewsDetails from './pc_news_details.js';
import PcNewsContainer from './pc_newscontainer.js';
import PcUserCenter from './pc_usercenter.js';

import { Switch, Route } from 'react-router-dom';

export default class Pcindex extends React.Component{
	render(){
		return (
			<div>
			<PcHeader />
			<main>
			
			<Switch>
			<Route exact path='/page' component={PcNewsContainer}/>
			<Route path='/details/:uniquekey' component={PcNewsDetails}/>
			<Route path='/usercenter' component={PcUserCenter}/>
			</Switch>

			</main>
			<PcFooter />
			</div>
			);
		}
	}

