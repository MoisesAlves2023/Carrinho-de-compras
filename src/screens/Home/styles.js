import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
flex: 1;
//background-color: #E0FFFF;
background-color: #FFF;
padding: 5px;
border-width: 1px;
`

export const Header = styled.View`
width: 100%;
height: 60px;
flex-direction: row;
background-color: #FFF;
margin-top: 35px;
align-items: center;
justify-content: space-between;	
padding-left: 12px;
padding-right: 12px;


`
export const Title = styled.Text`
font-size: 28px;
font-weight: bold;
color: black;
margin-left: 5px;
margin-right: 5px;

`

export const TextProducts = styled.Text`
font-size: 22px;
font-weight: bold;
color: black;
margin-left: 5px;
margin-right: 5px;
align-self: flex-start; 

`

export const ContainerProduct = styled.View`
width: 100%;
height: 90px;
flex: 1;
background-color: #FFF;
margin-top: 5px;
align-items: center;
border-radius: 5px;
justify-content: start;
border-width: 1px;	
`
export const Product = styled.View`
width: 100%;
height: 100px;
flex-direction: row;
flex: 1;
background-color: #FFF;
margin-top: 5px;
align-items: center;
border-radius: 5px;
justify-content: space-between;	
`
export const CartIcon = styled.View`
  position: relative;
`;

export const CartBadge = styled.View`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;