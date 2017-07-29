import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PostList from '../components/PostList.js';
import {
  Text,
  View,
  FlatList,
  Alert
} from 'react-native';
import constants from '../constants';
import axios from 'axios';
import Separator from '../components/Separator.js';
import styles from './styles/containerStyles.js';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  componentDidMount() {
    this.props.fetchData(constants.redditUrl);

  }

  _onRefresh = () => {
    this.props.fetchData(constants.redditUrl);
  }

  _onPress = post => {
    this.props.select(post);
    this.props.navigation.navigate("Post");
  }

  _keyExtractor = (item, index) => item.data.id;

  _renderItem = ({item}) => (
    <PostList press={this._onPress} post={item.data}/>
  );

  render() {
    return (
      <View style={styles.base}>
        <FlatList 
          ItemSeparatorComponent={Separator}
          scrollEnabled={true}
          keyExtractor={this._keyExtractor}
          data={this.props.data.data}
          refreshing={this.props.data.isFetching}
          renderItem={this._renderItem}
          onRefresh={this._onRefresh}
        />
      </View>
    );
  }
}

export default connect( constants.mapStateToProps, constants.mapDispatchToProps )(Home);

