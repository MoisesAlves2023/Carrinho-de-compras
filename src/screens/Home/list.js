import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, TextProducts, ContainerProduct, Product } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function List({ data, addToCart  }) {
  const [addProduct, setAddProduct] = useState(0);

  function handleAddProduct() {
    setAddProduct(addProduct + 1);
  }

  return (
    <ContainerProduct>
      <Product>
        <TextProducts>{data.name}</TextProducts>
        <TouchableOpacity onPress={addToCart}>
          <Icon name='plus-square' size={35} color={'green'} />
        </TouchableOpacity>
      </Product>
      <TextProducts>R$ {data.price}</TextProducts>
    </ContainerProduct>
  );
}
