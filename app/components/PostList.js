import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from './styles/postlistStyle.js';
import constants from '../constants.js'

const PostList = props => 
  <View style={styles.base}>
    <TouchableOpacity style={styles.containerRow} onPress={ post => props.press(props.post) }>
      <View style={styles.containerColumn1}>
        <Image style={styles.icon} source={ props.post.thumbnail.includes('http') ? { uri: props.post.thumbnail  } : require('../assets/default.png') }/>
        <Text>
          <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
          {constants.convertNum(props.post.ups)}
        </Text>
      </View>
      <View style={styles.containerColumn2}>
        <Text numberOfLines={3} style={styles.title}>{props.post.title}</Text>
        <Text style={styles.author}>{`submitted by ${props.post.author}`}</Text>
      </View>
    </TouchableOpacity>
  </View>

export default PostList;