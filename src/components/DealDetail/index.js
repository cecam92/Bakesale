import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import {priceDisplay} from '../Utils';
import {style} from './styles';

import {fetchDetail} from '../../ajax';

const DealDetail = ({route}) => {
  const {deal} = route.params;
  const [data, setData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const imageXPos = new Animated.Value(0);
  const width = Dimensions.get('window').width;

  const imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (evt, gs) => {
      if (Math.abs(gs.dx) > width * 0.2) {
        const side = Math.sign(gs.dx);
        setDirection(side);
        Animated.timing(imageXPos, {
          toValue: side * width,
          duration: 250,
          useNativeDriver: false,
        }).start(() => {
          handleSwipe(-1 * side);
        });
      } else {
        Animated.spring(imageXPos, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const handleSwipe = indexDirection => {
    const media = [...deal.media];
    if (!media[imageIndex + indexDirection]) {
      Animated.spring(imageXPos, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      return;
    } else {
      setImageIndex(imageIndex + indexDirection);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const detail = await fetchDetail(deal.key);
      setData(detail);
    };
    getData();
  }, [deal.key]);

  useEffect(() => {
    //Next Image Animation
    imageXPos.setValue(-1 * direction * width);
    Animated.spring(imageXPos, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, [imageIndex, direction, imageXPos, width]);

  return (
    <ScrollView View style={style.deal}>
      <Animated.Image
        {...imagePanResponder.panHandlers}
        style={[{left: imageXPos}, style.image]}
        source={{uri: deal.media[imageIndex]}}
      />
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
    </ScrollView>
  );
};

export default DealDetail;
