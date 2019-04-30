import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import store from './store';
import Header from './common/header';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <GlobalStyle />
        <BrowserRouter>
        <Fragment>
        <Header/>
        <Route path='/' exact component={Home}/>
        </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
