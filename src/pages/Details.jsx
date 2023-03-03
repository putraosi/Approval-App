import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Container,
  Gap,
  Header,
  Input,
  SpaceBeetwen,
} from '../components';
import {rupiah} from '../helpers';
import {ToastAlert} from '../utils';

const Details = ({navigation, route}) => {
  const {data} = route?.params;

  return (
    <Container hideBottom>
      <Header title={'Details'} onDismiss={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input
            label={'Employee Number'}
            value={data?.employeeNumber.toString()}
            editable={false}
          />

          <Input
            style={styles.gap}
            label={'Employee Name'}
            value={data?.employeeName}
            editable={false}
          />

          <Input
            style={styles.gap}
            label={'Claim Date'}
            value={data?.claimDate}
            editable={false}
          />

          <Input
            style={styles.gap}
            label={'Category'}
            value={data?.category}
            editable={false}
          />

          <Input
            style={styles.gap}
            label={'Reimbursement amount'}
            value={`Rp${rupiah(data?.reimbursementAmount)}`}
            editable={false}
          />

          <Input
            style={styles.gap}
            label={'Description'}
            value={data?.description}
            editable={false}
          />

          <Input
            style={styles.gap}
            label={'Status'}
            value={data?.status}
            editable={false}
          />

          <Gap height={20} />

          <SpaceBeetwen>
            <Button
              style={styles.button}
              label={'Approve'}
              onPress={() => {
                ToastAlert('Success Approved');
                navigation.goBack();
              }}
            />

            <Gap width={16} />

            <Button
              style={styles.button}
              label={'Reject'}
              onPress={() => {
                ToastAlert('Success Rejected');
                navigation.goBack();
              }}
            />
          </SpaceBeetwen>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  gap: {
    marginTop: 10,
  },

  button: {
    flex: 1,
  },
});
