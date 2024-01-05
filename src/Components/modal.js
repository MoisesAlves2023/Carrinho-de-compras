import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomModalContent = ({ closeModal, addProduct, products }) => {
    const [newProduct, setNewProduct] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');

    function AddProduct() {
        const lastId = products.length > 0 ? Number(products[products.length - 1].id) : 0;
        const newProductId = lastId + 1;

        const newProductData = {
            id: newProductId,
            name: newProduct,
            price: parseFloat(newProductPrice) || 0
        };

        // Atualize o estado para incluir o novo produto sem substituir os produtos existentes
        addProduct([...products, newProductData]);

        // Salve os produtos no AsyncStorage
        AsyncStorage.setItem('products', JSON.stringify([...products, newProductData]))
            .then(() => console.log('Produtos salvos com sucesso no AsyncStorage'))
            .catch(error => console.error('Erro ao salvar produtos no AsyncStorage:', error));

        closeModal();
    }

    return (
        <View>
            <Text numberOfLines={1}>Inserir Produtos</Text>
            <TextInput
                style={{borderWidth:1}}
                placeholder='Digite o nome do produto'
                onChangeText={(item) => setNewProduct(item)} />
            <TextInput
            style={{borderWidth:1}}
                placeholder='Digite o preço do produto'
                onChangeText={(item) => setNewProductPrice(item)}
                keyboardType='numeric' />
            <TouchableOpacity style={{backgroundColor:'green', marginTop: 10}} onPress={AddProduct}>
                <Text>Adicionar Produto</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomModalContent;
