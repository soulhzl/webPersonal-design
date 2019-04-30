import React, {
	Component,
	Fragment
} from 'react';
import {
	Provider
} from 'react-redux';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import store from './store';
import {
	GlobalStyle
} from './style';
import './config';
import User from './pages/user';
import AuthRoute from './pages/user/components/authroute';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
        	<Fragment>
        	<AuthRoute />
        	<Route path='/' component={User}/>
        	</Fragment>
        	</BrowserRouter>
			</Provider>
		);
	}
}

export default App;