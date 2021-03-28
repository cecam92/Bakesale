import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchInitialDeals} from '../../ajax';
import DealList from '../DealList';
import {style} from './styles';

const Home = ({navigation}) => {
  const [deals, setDeals] = useState([]);

  const fetchDeals = async () => {
    const data = await fetchInitialDeals();
    setDeals(data);
  };

  useEffect(() => {
    fetchDeals();
  }, []);
  return (
    <SafeAreaView style={style.container}>
      {deals.length > 0 ? (
        <DealList deals={deals} navigation={navigation} />
      ) : (
        <Text style={style.header}>Hello Bakesale</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
