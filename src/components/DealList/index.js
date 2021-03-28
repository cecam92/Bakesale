import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import DealItem from '../DealItem';

const DealList = ({deals, navigation}) => {
  const handlePress = item => () => {
    navigation.navigate('Details', {deal: item});
  };
  return (
    <SafeAreaView>
      <FlatList
        data={deals}
        renderItem={({item}) => (
          <DealItem deal={item} onPress={handlePress(item)} />
        )}
      />
    </SafeAreaView>
  );
};
export default DealList;
