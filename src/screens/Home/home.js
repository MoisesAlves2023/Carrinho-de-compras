import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Title, CartIcon, CartBadge } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import List from './list';
import { useNavigation } from '@react-navigation/native';
import CustomModalContent from '../../Components/modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Feijão',
      price: 8
    },
    {
      id: '2',
      name: 'Oleo',
      price: 5
    },
    {
      id: '3',
      name: 'Arroz',
      price: 33
    },
    {
      id: '4',
      name: 'Rufles',
      price: 12
    },
    {
      id: '5',
      name: 'Sensação',
      price: 14
    },
    {
      id: '6',
      name: 'Detergente',
      price: 2.30
    },
    {
      id: '7',
      name: 'Sal',
      price: 2.50
    },
    {
      id: '8',
      name: 'Pipoca Micro-Ondas',
      price: 3
    },
    {
      id: '9',
      name: 'Bombril',
      price: 6
    },
    {
      id: '10',
      name: 'Agua Mineral',
      price: 11
    },
    {
      id: '11',
      name: 'Suco',
      price: 1.20
    },
    {
      id: '12',
      name: 'Açucar',
      price: 18
    },
    {
      id: '13',
      name: 'Café',
      price: 18
    },
    {
      id: '14',
      name: 'Bolacha Nikito',
      price: 2.90
    },
    {
      id: '15',
      name: 'Bolacha Mabel',
      price: 8
    },
    {
      id: '16',
      name: 'Bolacha Salpet',
      price: 4
    },
    {
      id: '17',
      name: 'Chero do vaso',
      price: 2
    },
    {
      id: '18',
      name: 'Amaciante Grande',
      price: 22
    },
    {
      id: '19',
      name: 'Amaciante Pequeno',
      price: 10.90
    },
    {
      id: '20',
      name: 'Sabão em pó',
      price: 15
    },
    {
      id: '21',
      name: 'Margarina',
      price: 15.50
    },
    {
      id: '22',
      name: 'Leite Condesado',
      price: 7
    },
    {
      id: '23',
      name: 'Creme de leite',
      price: 5.30
    },
    {
      id: '24',
      name: 'Sabonete',
      price: 2.50
    },
    {
      id: '25',
      name: 'Creme de Cabelo',
      price: 30
    },
    {
      id: '26',
      name: 'Shampoo',
      price: 12.30
    },
    {
      id: '27',
      name: 'Colgate',
      price: 4.50
    },
    {
      id: '28',
      name: 'Kotrine',
      price: 12.30
    },
    {
      id: '29',
      name: 'Polpa',
      price: 5.30
    },
    {
      id: '30',
      name: 'Leite',
      price: 5.80
    },
    {
      id: '31',
      name: 'Desodorante',
      price: 12.30
    },
    {
      id: '32',
      name: 'Papel Higienico',
      price: 20.30
    },
    {
      id: '33',
      name: 'Caixa de Bombom',
      price: 15
    },
    {
      id: '34',
      name: 'Caldo Kinor',
      price: 4
    },
    {
      id: '35',
      name: 'Sazom',
      price: 3
    },
    {
      id: '36',
      name: 'Frango Bandeja',
      price: 22
    },
    {
      id: '37',
      name: 'Hamburguer',
      price: 6.30
    },
    {
      id: '38',
      name: 'Pao de Forma',
      price: 7
    },
    {
      id: '39',
      name: 'Batatinha',
      price: 30
    },
    {
      id: '40',
      name: 'Sorvete',
      price: 30
    },
  ]);
  const [cart, setCart] = useState([]); // Carrinho de compras

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      existingProduct.quantity++;
    }
  };

  useEffect(() => {
    // Recupere os produtos salvos no AsyncStorage
    AsyncStorage.getItem('products')
        .then((storedProducts) => {
            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            }
        })
        .catch(error => console.error('Erro ao recuperar produtos do AsyncStorage:', error));
}, []);

  useEffect(() => {
    // Calcular dinamicamente o número de itens no carrinho
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    navigation.setParams({ itemCount });
  }, [cart, navigation]);

  useEffect(() => {
    // Limpar o carrinho ao desmontar o componente
    return () => {
      setCart([]);
    };
  }, []);

  const goToCart = () => {
    navigation.navigate('Cart', { cartItems: cart, setCartItems: setCart });
  };

  const OpenModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
        <TouchableOpacity onPress={OpenModal}>
          <Icon name='plus' size={35} />
        </TouchableOpacity>
      </Header>
      <TouchableWithoutFeedback onPress={closeModal}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <List data={item} addToCart={() => addToCart(item)} />
          )}
          keyExtractor={(item) => item.id}
        />
      </TouchableWithoutFeedback>
  
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CustomModalContent closeModal={closeModal} products={products} addProduct={setProducts} />
          </View>
        </View>
      </Modal>
    </Container>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fundo escuro semi-transparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
});