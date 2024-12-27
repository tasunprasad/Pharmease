import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Badge from '../Badge';

const {width} = Dimensions.get('window');

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index
  const images = [
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/137/200/300',
  ];

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width - 20}
        height={width * 0.6}
        autoPlay
        autoPlayInterval={3000}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item}}
              style={styles.image}
              resizeMode="cover"
            />
            <Badge />
          </View>
        )}
        customAnimation={undefined}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '35%',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#5626E1',
  },
});

export default ProductCarousel;
