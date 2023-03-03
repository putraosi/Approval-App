import {_} from 'lodash';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IcLogout} from '../assets';
import {
  Container,
  Header,
  Input,
  ItemApproval,
  ItemSort,
  List,
  TextView,
} from '../components';
import DataDummy from '../Data/Approval.json';
import {colors} from '../utils';

const SORT = ['All', 'Medical', 'Optical', 'Transport', 'Dental'];

const Home = ({navigation}) => {
  const [data, setData] = useState(DataDummy);
  const [sort, setSort] = useState('All');
  const [search, setSearch] = useState('');

  const onLoadMore = () => {
    let oldData = _.clone(data);

    if (sort != 'All') {
      oldData = oldData.filter(item => item?.category === sort.toLowerCase());
      const add = DataDummy.filter(
        item => item?.category === sort.toLowerCase(),
      );

      oldData.push(...add);
    } else {
      oldData.push(...DataDummy);
    }

    if (search) {
      const _search = search.toLowerCase();

      oldData = oldData.filter(item => {
        return item?.employeeName?.toLowerCase().match(_search);
      });
    }

    setData(oldData);
  };

  const onSort = (select, oldData) => {
    if (select != sort) {
      setSort(select);

      if (select != 'All') {
        oldData = oldData.filter(
          item => item?.category === select.toLowerCase(),
        );
      }

      if (search) {
        const _search = search.toLowerCase();

        oldData = oldData.filter(item => {
          return item?.employeeName?.toLowerCase().match(_search);
        });
      }

      setData(oldData);
    }
  };

  const onSearch = (value, oldData) => {
    setSearch(value);

    if (sort != 'All') {
      oldData = oldData.filter(
        item => item?.category === sort.toLowerCase(),
      );
    }

    const _search = value.toLowerCase();
    let newData = oldData;

    const filtered = newData.filter(item => {
      return item?.employeeName?.toLowerCase().match(_search);
    });

    setData(filtered);
  };

  return (
    <Container hideBottom backgroundColor={colors.backgroundColor.secondary}>
      <Header
        title={'Approval'}
        IconRight={IcLogout}
        onPress={() => navigation.replace('Login')}
      />

      <View style={styles.containerSort}>
        <Input
          style={styles.search}
          value={search}
          placeholder={'Search...'}
          onChangeText={value => onSearch(value, _.clone(DataDummy))}
        />

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {SORT.map((item, index) => (
            <ItemSort
              key={index}
              value={item}
              isActive={sort === item}
              onPress={() => onSort(item, DataDummy)}
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
        renderEmpty={() => <TextView>{'No Data'}</TextView>}
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

  search: {
    marginHorizontal: 8,
    marginBottom: 10,
  },
});
