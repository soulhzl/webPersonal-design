import React from 'react';
import ReactDOM from 'react-dom';
import Pcindex from './js/pc_index.js';
import Mobileindex from './js/mobile_index.js';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
class Index extends React.Component{
	render(){
		return (
			<div>
			<MediaQuery query='(min-device-width: 1224px)'>
			<BrowserRouter>
			<Pcindex />
			</BrowserRouter>
			</MediaQuery>
			<MediaQuery query='(max-device-width: 1224px)'>
			<BrowserRouter>
			<Mobileindex />
			</BrowserRouter>
			</MediaQuery>
			</div>
			);
		}
	}

	ReactDOM.render(<Index />, document.getElementById('mainContainer'));