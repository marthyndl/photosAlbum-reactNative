import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import { images } from './reducers';

const imagesPersistConfig = {
  key: 'images',
  storage: AsyncStorage
};

const reducer = combineReducers({
  images: persistReducer(imagesPersistConfig, images)
});

const store = createStore(reducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  render() {
    if (this.state.data) {
      var res = this.state.data.map(item => {
        if (item.id === 1) {
          return <Text key={item.id}>{item.title}</Text>;
        }
      });
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Text>{this.state.data ? res : 'Loading!!! ...'}</Text>
        </PersistGate>
      </Provider>
    );
  }
}
