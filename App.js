import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login:', login, 'Senha:', senha);
  };

  const handleEsqueceuSenha = () => {
    console.log('Senha esquecida');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/f2a2e608c854822ad2563a09595e7827.png',
        }}
      />
      <Text style={styles.text}>
        Learn a Language for Free{'\n'}
        Forever
        {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
      </Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button1}>
          <Text style={styles.buttonText1}>GET STARTED</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={handleEsqueceuSenha} style={styles.button2}>
          <Text style={styles.buttonText2}>I ALREADY HAVE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 230,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 40,
    color: 'gray',
  },
  inputContainer: {
    margin: 20,
    width: '80%',
    maxWidth: 400,
  },
  button1: {
    backgroundColor: '#70EE00',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  button2: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderColor:'gray',
    borderWidth: 1,
  },
  buttonText1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonText2: {
    color: '#70EE00',
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    height: 12,
  },
});
