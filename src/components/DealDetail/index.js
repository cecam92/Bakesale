import React from 'react';
import {View, Text, Image} from 'react-native';
import {priceDisplay} from '../Utils';
import {style} from './styles';

const DealDetail = ({deal}) => {
  return (
    <View View style={style.deal}>
      <Image style={style.image} source={{uri: deal.media[0]}} />
      <View>
        <View style={style.description}>
          <Text style={style.title}>{deal.title}</Text>
          <View style={style.footer}>
            <Text style={style.cause}>{deal.cause.name}</Text>
            <Text style={style.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
        <Text>....</Text>
      </View>
    </View>
  );
};

export default DealDetail;
