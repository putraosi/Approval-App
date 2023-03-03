import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {rupiah} from '../helpers';
import {colors} from '../utils';
import SpaceBeetwen from './SpaceBeetwen';
import TextView from './TextView';

const ItemApproval = ({data, onPress}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextView>{data?.employeeName}</TextView>

      <SpaceBeetwen>
        <TextView>{data?.claimDate}</TextView>
        <TextView>{`Rp${rupiah(data?.reimbursementAmount)}`}</TextView>
      </SpaceBeetwen>

      <SpaceBeetwen>
        <TextView style={styles.label}>{data?.category}</TextView>
        <TextView style={styles.label}>{data?.status}</TextView>
      </SpaceBeetwen>
    </TouchableOpacity>
  );
};

export default ItemApproval;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },

  label: {
    textTransform: 'capitalize',
  },
});
