import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import {
  Container,
  ProductContainer,
  ProductName,
  ProductPrice,
  QuantityContainer,
  QuantityText,
  TotalValue,
  ClearCart
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function Cart({ route }) {
  const { cartItems, setCartItems } = route.params; // Receive setCartItems function from navigation

  const [cart, setCart] = useState(cartItems);

  function Reset() {
    Alert.alert(
      'Deseja limpar o carrinho?',
      '',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Limpar',
          onPress: () => {
            setCart([]);
            setCartItems([]);
          },
        },
      ],
      { cancelable: false }
    );
  }
  const getTotalValue = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    // Filter out items with quantity 0
    const filteredCart = updatedCart.filter((item) => item.quantity > 0);

    setCart(filteredCart);
    setCartItems(filteredCart);
    // Update the parent component's state
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
    setCartItems(updatedCart); // Update the parent component's state
  };

  return (
    <Container>
      {cart.map((item) => (
        <ProductContainer key={item.id}>
          <ProductName>{item.name}</ProductName>
          <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
          <QuantityContainer>
            <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
              <Icon name='minus-square' size={25} color={'red'} />
            </TouchableOpacity>
            <QuantityText>{item.quantity}</QuantityText>
            <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
              <Icon name='plus-square' size={25} color={'green'} />
            </TouchableOpacity>
          </QuantityContainer>
        </ProductContainer>
      ))}
      <TotalValue>Valor Total: R$ {getTotalValue().toFixed(2)}</TotalValue>
      <View style={{alignItems:'center', justifyContent: 'center', marginBottom: 8}}>
        <ClearCart onPress={Reset} style={{ backgroundColor: 'red' }}>
          <Text style={{fontSize: 22, color:'white'}}>Limpar Carrinho</Text>
        </ClearCart>
      </View>
    </Container>
  );
}