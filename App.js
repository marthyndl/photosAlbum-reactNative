import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'https://www.linkedin.com/in/martín-daniel-lopez-45ba30aa',
  android: 'https://www.linkedin.com/in/martín-daniel-lopez-45ba30aa'
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson
        });
      })
      .catch(err => {
        this.setState({ data: err });
      });
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
      <View style={styles.container}>
        <Text>{this.state.data ? res : 'Loading!!! ...'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
