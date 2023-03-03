import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Row = ({style, children, onPress}) => {
  const Div = onPress ? TouchableOpacity : View;

  return (
    <Div style={[style.container, style]} onPress={onPress}>
      {children}
    </Div>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
