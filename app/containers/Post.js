import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import constants from '../constants';
import {
  Image,
  Text,
  View
} from 'react-native';
import styles from './styles/containerStyles';

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={ this.props.selected.thumbnail.includes('http') ? { uri: this.props.selected.thumbnail  } : require('../assets/default.png')}/>
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{this.props.selected.title}</Text>
          <Text style={styles.author}>{`submitted by ${this.props.selected.author}`}</Text>
          <Text style={styles.ups}>
            <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
            {this.props.selected.ups}
          </Text>
        </View>
      </View>
    );
  }
}

export default connect( constants.mapStateToProps )(Post);

