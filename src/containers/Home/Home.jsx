import React from 'react';
import {
  Container,
  Form,
  Title,
  FormSubcontainer,
  ProductsListTitle,
  ProductsList,
  ProductItem,
  ProductItemTitle,
  ProductItemCount,
  InputContainer,
  InputTitle,
  Input,
  Textarea,
  Button,
  InputError,
  ProductStock
} from './homeStyles';

const Home = () => {
  return (
    <Container>
      <Title>Has tu pedido</Title>

      <Form>
        <FormSubcontainer>
          <ProductsListTitle>Productos</ProductsListTitle>
          <ProductsList>
            <ProductItem>
              <ProductItemTitle>Titulo del producto</ProductItemTitle>
              <ProductItemCount
                type='number'
                defaultValue='0'
                max='10'
                min='0'
              />
              <ProductStock>10 en stock</ProductStock>
            </ProductItem>

            <ProductItem>
              <ProductItemTitle>Titulo del producto</ProductItemTitle>
              <ProductItemCount
                type='number'
                defaultValue='0'
                max='10'
                min='0'
              />
              <ProductStock>10 en stock</ProductStock>
            </ProductItem>

            <ProductItem>
              <ProductItemTitle>Titulo del producto</ProductItemTitle>
              <ProductItemCount
                type='number'
                defaultValue='0'
                max='10'
                min='0'
              />
              <ProductStock>10 en stock</ProductStock>
            </ProductItem>
          </ProductsList>

          <InputContainer>
            <InputTitle>Nombre</InputTitle>
            <Input />
            <InputError>Error example</InputError>
          </InputContainer>
          <InputContainer>
            <InputTitle>DNI</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>Fecha en la que se recibe el cargamento</InputTitle>
            <Input type='date' />
          </InputContainer>
          <InputContainer>
            <InputTitle>Notas sobre el pedido</InputTitle>
            <Textarea />
          </InputContainer>

          <Button>Enviar</Button>
        </FormSubcontainer>
      </Form>
    </Container>
  );
};

export default Home;
