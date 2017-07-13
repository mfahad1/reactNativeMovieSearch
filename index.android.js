import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReduxers,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {
  AppRegistry,
} from 'react-native';

import Reducers from './app/reducers'; 
import AppContainer from './app/containers/appContainer';


const loggerMiddleware = createLogger({predicate:(getState,action) => __DEV__ })

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

  return createStore(Reducers,initialState,enhancer);
}

const store = configureStore({})


const App = () => (
  <Provider store={store}>

      <AppContainer/>
    
  </Provider>
)


AppRegistry.registerComponent('SpotifyReactNative', () => App);
