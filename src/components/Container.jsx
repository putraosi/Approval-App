import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { colors } from '../utils';

const Container = ({
  children,
  backgroundColor = colors.backgroundColor.primary,
  statusBarColor = colors.primary,
  hideBottom,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <View
        style={[
          styles.statusBar,
          {
            backgroundColor: statusBarColor,
            height: insets.top,
          },
        ]}
      />
      <View
        style={[
          styles.content,
          {
            backgroundColor,
            paddingBottom: !hideBottom ? insets.bottom : 0,
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  statusBar: {
    width: '100%',
    zIndex: 1,
  },

  content: {
    flex: 1,
  },
});
