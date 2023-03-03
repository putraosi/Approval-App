import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const SpaceBeetwen = ({style, children, onPress}) => {
  const Div = onPress ? TouchableOpacity : View;

  return (
    <Div style={[style, styles.container]} onPress={onPress}>
      {children}
    </Div>
  );
};

export default SpaceBeetwen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
