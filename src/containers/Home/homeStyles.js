import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  min-height: 100vh;

  @media screen and (max-width: 667px) {
    padding: 1rem 0 0;
  }
`;

export const Title = styled.h1`
  margin: 1rem 0 2rem;
  text-align: center;
`;

export const Form = styled.form`
  background-color: #f1f1f1;
  padding: 2rem;
  width: 100%;

  @media screen and (min-width: 668px) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
    width: 500px;
    max-width: 100%;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 667px) {
    flex: 1;
  }
`;

export const FormSubcontainer = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
`;

export const ProductsListTitle = styled.h3`
  font-size: 1.4rem;
`;

export const ProductsList = styled.ul`
  list-style: none;
`;
