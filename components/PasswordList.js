import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const PasswordList = ({ passwords }) => {
  const handleCopy = async (password) => {
    await Clipboard.setStringAsync(password);
    Alert.alert('Copied', 'Password copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      {passwords.map((password, index) => (
        <View key={index} style={styles.passwordContainer}>
          <Text style={styles.text}>{password}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Copy" onPress={() => handleCopy(password)} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default PasswordList;
