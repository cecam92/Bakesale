import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import DealItem from '../DealItem';

const DealList = ({deals}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={deals}
        renderItem={({item}) => <DealItem deal={item} />}
      />
    </SafeAreaView>
  );
};
export default DealList;
