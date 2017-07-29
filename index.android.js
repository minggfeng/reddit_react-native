/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import App from './app/App.js';
import configureStore from './app/configureStore.js'; 
import { AppRegistry, StackNavigator } from 'react-native';

const store = configureStore;

export default class Project extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('project', () => Project);

