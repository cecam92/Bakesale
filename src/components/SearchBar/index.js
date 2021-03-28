import React, {useState, useEffect} from 'react';
import {TextInput, SafeAreaView} from 'react-native';
import style from './styles';

const SearchBar = ({searchDeals}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = searched => {
    setSearchTerm(searched);
  };

  useEffect(() => {
    searchDeals(searchTerm);
  }, [searchTerm]);

  return (
    <SafeAreaView style={style.main}>
      <TextInput
        style={style.input}
        placeholder="Search all Deals"
        onChangeText={handleChange}
      />
    </SafeAreaView>
  );
};

export default SearchBar;
