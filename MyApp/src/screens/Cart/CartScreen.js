import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../../context/CartContext';

export default function CartScreen() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={{ color: 'red' }}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
