import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils';
import TextView from './TextView';

const ItemSort = ({value, isActive, onPress}) => {
  let backgroundColor = colors.white;
  let color = colors.black;

  if (isActive) {
    backgroundColor = colors.black;
    color = colors.white;
  }
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={onPress}>
      <TextView style={{color}}>{value}</TextView>
    </TouchableOpacity>
  );
};

export default ItemSort;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black,
    marginLeft: 8,
    marginRight: 8,
  },
});
