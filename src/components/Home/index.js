import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchInitialDeals} from '../../ajax';
import DealList from '../DealList';
import SearchBar from '../SearchBar';
import {style} from './styles';
import {fetchDealsSearchResults} from '../../ajax';

const Home = ({navigation}) => {
  const [deals, setDeals] = useState([]);
  const [dealsFiltered, setDealsFiltered] = useState([]);

  const fetchDeals = async () => {
    const data = await fetchInitialDeals();
    setDeals(data);
  };

  const searchDeals = async searched => {
    const dealsFromSearch = await fetchDealsSearchResults(searched);
    setDealsFiltered(dealsFromSearch);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      {deals.length > 0 ? (
        <>
          <SearchBar searchDeals={searchDeals} />
          <DealList deals={dealsFiltered} navigation={navigation} />
        </>
      ) : (
        <Text style={style.header}>Hello Bakesale</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
