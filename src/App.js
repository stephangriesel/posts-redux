import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import PostsForm from './Components/PostForm';
import {Provider} from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PostsForm />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
