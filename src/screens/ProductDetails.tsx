import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import ProductCarousel from '../components/Carousel';
import Icon from '../components/Icon';
import {arrowLeft, minus, plus} from '../components/Icon/Icons';

export default function ProductDetails() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topBar}>
        <Icon icon={arrowLeft} />
        <Text style={styles.topBarTitle}>Product details</Text>
        <View />
      </View>
      <ProductCarousel />
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productTitle}>Novopen 4</Text>
        <Text style={styles.productDescription}>
          NovoPen® 4 is simple to use with robust design. It encompasses audible
          end of dose click reassuring dose delivery for an accurate insulin
          delivery.
        </Text>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPriceLabel}>LKR 5100.00</Text>
        <Text style={styles.productPriceValue}>LKR 4590.00</Text>
      </View>
      <View style={styles.productQuantityContainer}>
        <Text style={styles.productPriceLabel}>Quantity</Text>
        <View style={styles.quantityConatiner}>
          <TouchableOpacity style={styles.minusButton}>
            <Icon icon={minus} color="white" size={16} />
          </TouchableOpacity>
          <Text style={styles.quantityValue}>01</Text>
          <TouchableOpacity style={styles.plusButton}>
            <Icon icon={plus} color="white" size={16} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addToCartButtonContainer}>
        <Button title={'Add to cart'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginHorizontal: 10,
  },
  topBar: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarTitle: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Manrope-Bold',
  },
  productDetailsContainer: {
    paddingHorizontal: 10,
    gap: 10,
    marginTop: 20,
  },
  productTitle: {
    fontSize: 26,
    color: '#000',
    fontFamily: 'Manrope-ExtraBold',
    letterSpacing: -0.4,
  },
  productDescription: {
    fontSize: 16,
    color: '#4C4C4C',
    fontFamily: 'Manrope-Regular',
    letterSpacing: -0.1,
  },
  productPriceContainer: {
    paddingHorizontal: 10,
    marginTop: 35,
  },
  productPriceLabel: {
    color: '#818181',
    fontSize: 13,
    fontFamily: 'Manrope-Regular',
  },
  productPriceValue: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Manrope-Bold',
    letterSpacing: -0.2,
  },
  productQuantityContainer: {
    paddingHorizontal: 10,
    marginTop: 35,
  },
  productQuantityLabel: {
    fontSize: 16,
    color: '#646464',
    fontFamily: 'Manrope-Regular',
    letterSpacing: -0.1,
  },
  quantityConatiner: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  minusButton: {
    height: 20,
    width: 20,
    backgroundColor: '#5F2AF7',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityValue: {
    color: '#818181',
    fontSize: 13,
    fontFamily: 'Manrope-Regular',
    width: 14,
  },
  plusButton: {
    height: 20,
    width: 20,
    backgroundColor: '#5F2AF7',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
