import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './Components/Posts';
import PostForm from './Components/PostForm';

import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PostForm />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
