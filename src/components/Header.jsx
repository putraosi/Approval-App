import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../assets';
import TextView from './TextView';
import {colors} from '../utils';

const Header = ({title, IconLeft = IcBack, IconRight, onDismiss, onPress}) => {
  return (
    <View style={[styles.container]}>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss}>
          <IconLeft style={styles.iconLeft} />
        </TouchableOpacity>
      )}
      <TextView style={[styles.title]}>{title}</TextView>

      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <IconRight />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.black,
  },

  iconLeft: {
    marginRight: 16,
  },

  title: {flex: 1, fontSize: 16, fontWeight: '700', color: colors.white},
});
