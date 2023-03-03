import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {colors} from '../utils';

const List = ({
  style,
  loading,
  data,
  refreshing,
  renderItem,
  renderEmpty,
  onRefresh,
  onLoadMore,
}) => {
  const renderLoader = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    ) : null;
  };

  return (
    <FlatList
      style={style}
      keyExtractor={(item, index) => 'key' + index}
      data={data}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={onRefresh}
      renderItem={renderItem}
      ListFooterComponent={renderLoader}
      ListEmptyComponent={renderEmpty}
      onEndReached={onLoadMore}
      onEndReachedThreshold={2}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
