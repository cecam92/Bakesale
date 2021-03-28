import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {priceDisplay} from '../Utils';
import {style} from './styles';

import {fetchDetail} from '../../ajax';

const DealDetail = ({route}) => {
  const {deal} = route.params;
  const [data, setData] = useState([]);

  const getData = async () => {
    const detail = await fetchDetail(deal.key);
    setData(detail);
  };
  useEffect(() => {
    getData();
    console.log('data', data);
  }, [data]);

  return (
    <View View style={style.deal}>
      <Image style={style.image} source={{uri: deal.media[0]}} />
      <Text style={style.title}>{deal.title}</Text>

      <View style={style.dealDetail}>
        <View style={style.infoContainer}>
          <Text style={style.price}>{priceDisplay(deal.price)}</Text>
          <Text style={style.cause}>{deal.cause.name}</Text>
        </View>
        {data.user && (
          <View style={style.userContainer}>
            <Image source={{uri: data.user.avatar}} style={style.avatar} />
            <Text>{data.user.name}</Text>
          </View>
        )}
      </View>
      {data.user && (
        <View style={style.description}>
          <Text style={style.descriptionText}>{data.description}</Text>
        </View>
      )}
    </View>
  );
};

export default DealDetail;
