import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PasswordStrengthIndicator = ({ strength }) => {
  const getColor = () => {
    if (strength < 3) return 'red';
    if (strength < 5) return 'orange';
    return 'green';
  };

  return (
    <View style={styles.container}>
      <Text>Password Strength:</Text>
      <View style={[styles.indicator, { backgroundColor: getColor() }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    height: 10,
    width: 50,
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default PasswordStrengthIndicator;
