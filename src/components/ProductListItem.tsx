import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const ProductListItem = ({ product })=>{
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,

  }
});