import React from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';

import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View
      style={{
        marginTop: top + 20,
      }}>
      <View style={{height: 440}}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({item}) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
