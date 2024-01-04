import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Container, Header, Title, CartIcon, CartBadge } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import List from './list';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Coca Cola',
      price: 19.90
    },
    {
      id: '2',
      name: 'Panetone',
      price: 25.90
    },
    {
      id: '3',
      name: 'Arroz',
      price: 40.50
    },
    {
      id: '4',
      name: 'Rufles',
      price: 8
    },
    {
      id: '5',
      name: 'Sorvete',
      price: 29.90
    },
    {
      id: '6',
      name: 'Detergente',
      price: 2.30
    },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      existingProduct.quantity++;
    }
  };

  useEffect(() => {
    // Calculate the number of items in the cart dynamically
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    navigation.setParams({ itemCount });
  }, [cart, navigation]);

  const goToCart = () => {
    navigation.navigate('Cart', { cartItems: cart, setCartItems: setCart });
  };

  return (
    <Container>
      <Header>
        <Title>Lista de produtos</Title>
        <TouchableOpacity onPress={goToCart}>
          <CartIcon>
            <Icon name='shopping-cart' size={35} />
            {cart.length > 0 && (
              <CartBadge>
                <Text>{cart.length}</Text>
              </CartBadge>
            )}
          </CartIcon>
        </TouchableOpacity>
      </Header>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <List data={item} addToCart={() => addToCart(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}