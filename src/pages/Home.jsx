import {_} from 'lodash';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IcLogout} from '../assets';
import {Container, Header, ItemApproval, ItemSort, List} from '../components';
import DataDummy from '../Data/Approval.json';
import {colors} from '../utils';

const SORT = ['All', 'Medical', 'Optical', 'Transport', 'Dental'];

const Home = ({navigation}) => {
  const [data, setData] = useState(DataDummy);
  const [sort, setSort] = useState('All');

  const onLoadMore = () => {
    if (sort != 'All') {
      let newData = data.filter(item => item?.category === sort.toLowerCase());
      const add = DataDummy.filter(
        item => item?.category === sort.toLowerCase(),
      );

      newData.push(...add);
      setData(newData);
    } else {
      let newData = _.clone(data);

      newData.push(...DataDummy);
      setData(newData);
    }
  };

  const onSort = select => {
    if (select != sort) {
      setSort(select);

      if (select != 'All') {
        let newData = DataDummy.filter(
          item => item?.category === select.toLowerCase(),
        );
        setData(newData);
      } else setData(DataDummy);
    }
  };

  return (
    <Container hideBottom backgroundColor={colors.backgroundColor.secondary}>
      <Header
        title={'Approval'}
        IconRight={IcLogout}
        onPress={() => navigation.replace('Login')}
      />

      <View style={styles.containerSort}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {SORT.map((item, index) => (
            <ItemSort
              key={index}
              value={item}
              isActive={sort === item}
              onPress={() => onSort(item)}
            />
          ))}
        </ScrollView>
      </View>

      <List
        data={data}
        renderItem={({item}) => (
          <ItemApproval
            data={item}
            onPress={() => navigation.navigate('Details', {data: item})}
          />
        )}
        onLoadMore={onLoadMore}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSort: {
    paddingVertical: 8,
    marginBottom: 8,
    backgroundColor: colors.white,
  },
});
