import React from 'react';
import {
  Container,
  Form,
  Title,
  FormSubcontainer,
  ProductsList,
  ProductItem,
  ProductItemTitle,
  ProductItemCount,
  InputContainer,
  InputTitle,
  Input,
  Textarea
} from './homeStyles';

const Home = () => {
  return (
    <Container>
      <Title>Has tu pedido</Title>

      <Form>
        <FormSubcontainer>
          <ProductsList>
            <ProductItem>
              <ProductItemTitle>Titulo del producto</ProductItemTitle>
              <ProductItemCount type='number' />
            </ProductItem>

            <ProductItem>
              <ProductItemTitle>Titulo del producto</ProductItemTitle>
              <ProductItemCount type='number' />
            </ProductItem>

            <ProductItem>
              <ProductItemTitle>Titulo del producto</ProductItemTitle>
              <ProductItemCount type='number' />
            </ProductItem>
          </ProductsList>

          <InputContainer>
            <InputTitle>Nombre</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>DNI</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>Fecha en la que se recibe el cargamento</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>Fecha en la que se recibe el cargamento</InputTitle>
            <Textarea />
          </InputContainer>
        </FormSubcontainer>
      </Form>
    </Container>
  );
};

export default Home;
