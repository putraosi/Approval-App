import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils';

const TextView = ({style, children}) => {
  return <Text style={[styles.label, style]}>{children}</Text>;
};

export default TextView;

const styles = StyleSheet.create({
  label: {
    color: colors.text.primary,
    fontSize: 14,
  },
});
