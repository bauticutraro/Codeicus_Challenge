import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/buttonStyles';
import Input from '../../components/Input/Input';
import ProductItem from '../../components/ProductItem/ProductItem';
import {
  Container,
  Form,
  Title,
  FormSubcontainer,
  ProductsListTitle,
  ProductsList,
  TextError
} from './homeStyles';

const products = [
  { id: 1, cod: 'PROD-A', name: 'Café', stock: 15 },
  { id: 2, cod: 'PROD-B', name: 'Pepsi', stock: 10 },
  { id: 3, cod: 'PROD-C', name: 'Agua', stock: 5 },
  { id: 4, cod: 'PROD-D', name: 'Coca cola', stock: 0 },
  { id: 5, cod: 'PROD-E', name: 'Sprite', stock: 4 }
];

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [addedProducts, setAddedProducts] = useState([]);
  const [productsError, setProductsError] = useState('');

  const onSubmit = data => {
    const dataToSend = { ...data, products: [...addedProducts] };

    if (!dataToSend.products.length) {
      setProductsError('Debes añadir al menos un producto');
      return false;
    } else if (dataToSend.products.some(({ stock, count }) => count > stock)) {
      setProductsError('No puedes pasarte del limite de stock');
      return false;
    } else {
      setProductsError('');
      console.log(dataToSend);
      return true;
    }
  };

  return (
    <Container>
      <Title>Has tu pedido</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSubcontainer>
          <ProductsListTitle>Productos</ProductsListTitle>

          <ProductsList>
            {products.map(product => (
              <ProductItem
                key={product.id}
                {...product}
                setAddedProducts={setAddedProducts}
                addedProducts={addedProducts}
              />
            ))}
          </ProductsList>

          <Input
            title='Nombre'
            {...register('name', {
              required: watch('dni') && 'Campo requerido'
            })}
            error={errors?.name?.message}
          />
          <Input
            title='DNI'
            type='number'
            {...register('dni', {
              required: watch('name') && 'Campo requerido'
            })}
            error={errors?.dni?.message}
          />
          <Input
            title='Fecha en la que se recibe el cargamento'
            type='date'
            {...register('date', {
              pattern:
                '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$'
            })}
            error={errors?.date?.type === 'pattern' && 'Fecha inválida'}
          />
          <Input
            title='Notas sobre el pedido'
            type='textarea'
            {...register('notes')}
          />

          {productsError && <TextError>{productsError}</TextError>}

          <Button>Enviar</Button>
        </FormSubcontainer>
      </Form>
    </Container>
  );
};

export default Home;
