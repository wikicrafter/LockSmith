import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const PasswordSettings = ({ settings, setSettings }) => {
  const handleSliderChange = (value) => setSettings({ ...settings, length: value });
  const handleToggle = (key) => setSettings({ ...settings, [key]: !settings[key] });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password Length: {settings.length}</Text>
      <Slider
        minimumValue={8}
        maximumValue={20}
        step={1}
        value={settings.length}
        onValueChange={handleSliderChange}
      />
      <View style={styles.row}>
        <Text style={styles.text}>Include Uppercase</Text>
        <Switch
          value={settings.includeUppercase}
          onValueChange={() => handleToggle('includeUppercase')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Include Lowercase</Text>
        <Switch
          value={settings.includeLowercase}
          onValueChange={() => handleToggle('includeLowercase')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Include Numbers</Text>
        <Switch
          value={settings.includeNumbers}
          onValueChange={() => handleToggle('includeNumbers')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Include Special Characters</Text>
        <Switch
          value={settings.includeSpecialChars}
          onValueChange={() => handleToggle('includeSpecialChars')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default PasswordSettings;
