import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Service from './Screen/Service';


export default class App extends React.Component{
  state = {
    loaded : false
  }
  constructor(){
    super();
    Service.load(v => this.setState({loaded: true}));

  }
  render() {
    return(
      <View style={styles.container}>
          {this.state.loaded ? <Text>Welcome</Text> : <Text>Loading...</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
