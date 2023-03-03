import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextView from './TextView';
import {colors} from '../utils';
import {IcHide, IcShow} from '../assets';

const Input = ({
  style,
  label,
  value,
  placeholder,
  Icon,
  secureTextEntry,
  editable = true,
  keyboardType = 'default',
  onChangeText,
  onTooglePassword,
}) => {
  const showLabel = label ? true : false;
  const DivPassword = onTooglePassword ? TouchableOpacity : View;

  let showIcon = false;

  if (onTooglePassword) {
    showIcon = true;
    Icon = secureTextEntry ? IcShow : IcHide;
  }

  return (
    <View style={[styles.container, style]}>
      {showLabel && <TextView style={styles.label}>{label}</TextView>}

      <View style={styles.containerInput}>
        <TextInput
          style={[styles.input]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.placeholder}
          numberOfLines={1}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          editable={editable}
        />

        {showIcon && (
          <DivPassword onPress={onTooglePassword}>
            <Icon />
          </DivPassword>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
  },

  label: {
    marginBottom: 4,
    fontSize: 12,
  },

  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 0,
    color: colors.text.primary,
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
});
