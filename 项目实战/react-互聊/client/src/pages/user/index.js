import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	Route,
	Switch
} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import BoyInfo from './components/boyinfo';
import GirlInfo from './components/girlinfo';
import Dashboard from '../chat/index';
import Chat from '../chat/components/chat';

class User extends PureComponent {
	render() {
		return (<Fragment>
			<Switch>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/boyinfo' component={BoyInfo}/>
			<Route path='/girlinfo' component={GirlInfo}/>
        	<Route path='/chat/:user' component={Chat}/>
			<Route component={Dashboard}/>
			</Switch>
			</Fragment>);
	}
}

export default User;