import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PasswordSettings from './components/PasswordSettings';
import PasswordList from './components/PasswordList';
import { generatePasswords } from './utils/passwordUtils';

export default function App() {
  const [passwordSettings, setPasswordSettings] = useState({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSpecialChars: true,
    quantity: 1,
  });

  const [passwords, setPasswords] = useState([]);

  const handleGeneratePasswords = () => {
    const newPasswords = generatePasswords(passwordSettings);
    setPasswords(newPasswords);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <PasswordSettings settings={passwordSettings} setSettings={setPasswordSettings} />
      <Button title="Generate Passwords" onPress={handleGeneratePasswords} />
      <PasswordList passwords={passwords} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 90,
  },
});
