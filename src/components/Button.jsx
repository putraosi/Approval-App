import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils';
import TextView from './TextView';

const Button = ({style, label, disable, onPress}) => {
  const Div = !disable ? TouchableOpacity : View;

  return (
    <Div style={[styles.container, style]} onPress={onPress}>
      <TextView style={[styles.label]}>{label}</TextView>
    </Div>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.black,
    borderColor: colors.black,
  },

  label: {
    fontWeight: '700',
    color: colors.white,
  },
});
