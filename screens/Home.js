import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      kata: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login!</Text>
        <Text>Masukkan nama anda</Text>
        <TextInput 
          style={ styles.inputBox }
          value={(this.state.angka) }
        />
        <Button title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  },
});
