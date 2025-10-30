import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';

const products = [
  { id: '1', name: 'Hotel Room Deluxe', price: 150, image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1' },
  { id: '2', name: 'Hotel Room Standard', price: 100, image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1' },
];

export default function HomeScreen({ navigation }) {
  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 150, borderRadius: 10 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>
      <Text style={{ fontSize: 16 }}>${item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={{ marginTop: 5 }}>
        <Text style={{ color: 'tomato' }}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id} />;
}
