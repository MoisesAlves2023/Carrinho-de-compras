import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ContainerProduct, TextProducts, Product } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function List({ data, addToCart }) {
  return (
    <ContainerProduct>
      <Product>
        <TextProducts>{data.name}</TextProducts>
        <TouchableOpacity onPress={() => addToCart(data)}>
          <Icon name='plus-square' size={35} color={'green'} />
        </TouchableOpacity>
      </Product>
      <TextProducts>R$ {data.price}</TextProducts>
    </ContainerProduct>
  );
}
