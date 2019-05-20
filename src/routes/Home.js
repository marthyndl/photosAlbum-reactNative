import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAlbums, setImages } from '../actions/Albums';

class Home extends Component {
  static navigationOptions = {
    title: 'Gallery'
  };

  componentDidMount() {
    if (this.props.albums.length === 0) {
      this.props.dispatch(getAlbums());
    }
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <FlatList
          data={this.props.albums}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ images: { albums } }) => ({
  albums
});

export default connect(mapStateToProps)(Home);
