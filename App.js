import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  state={
    data: []
  };
    componentWillMount(){
      this.fetch();
    }
    fetch =async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      .then(response => response.json())
      .then(json => console.log(json))
    }

  render( {
    return (
      <View style={styles.container}>
    <TouchableOpacity onPress={this.fetch} style={styles.button}>
      <Text>jsonplaceholder</Text>
    </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
