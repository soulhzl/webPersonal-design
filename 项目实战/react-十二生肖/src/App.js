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
import {
  GlobalStyle
} from './style';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
        <Fragment>
        <Header />
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/detail/:id' exact component={Detail}/>
        </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;