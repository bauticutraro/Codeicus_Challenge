import React from 'react';
import { Button } from '../../components/Button/buttonStyles';
import Input from '../../components/Input/Input';
import ProductItem from '../../components/ProductItem/ProductItem';
import {
  Container,
  Form,
  Title,
  FormSubcontainer,
  ProductsListTitle,
  ProductsList
} from './homeStyles';

const products = [
  { id: 1, cod: 'PROD-A', name: 'Un producto', stock: 10 },
  { id: 2, cod: 'PROD-B', name: 'Un producto', stock: 10 },
  { id: 3, cod: 'PROD-C', name: 'Un producto', stock: 10 },
  { id: 4, cod: 'PROD-D', name: 'Un producto', stock: 10 }
];

const Home = () => {
  return (
    <Container>
      <Title>Has tu pedido</Title>

      <Form>
        <FormSubcontainer>
          <ProductsListTitle>Productos</ProductsListTitle>

          <ProductsList>
            {products.map(({ id, name, stock }) => (
              <ProductItem key={id} name={name} stock={stock} />
            ))}
          </ProductsList>

          <Input title='Nombre' />
          <Input title='DNI' />
          <Input title='Fecha en la que se recibe el cargamento' type='date' />
          <Input title='Notas sobre el pedido' type='textarea' />

          <Button>Enviar</Button>
        </FormSubcontainer>
      </Form>
    </Container>
  );
};

export default Home;
