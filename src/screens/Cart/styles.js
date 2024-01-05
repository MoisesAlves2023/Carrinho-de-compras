import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding-bottom: 1px;
`;

export const ProductContainer = styled.View`
  border-width: 1px;
  border-color: #ddd;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: green;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const QuantityText = styled.Text`
  font-size: 16px;
  margin: 10px;
  
`;

export const TotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const ClearCart = styled.TouchableOpacity`
width:80%;
height: 60px;
align-items: center;
justify-content: center;
background-color: red;
border-radius: 5px;

`
