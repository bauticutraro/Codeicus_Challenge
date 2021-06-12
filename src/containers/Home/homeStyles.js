import styled, { css } from 'styled-components';

const input = css`
  padding: 0.5rem 1rem;
  outline: 0;
  border: 1px solid var(--gray-2);
  border-radius: 0.25rem;
  width: 100%;
`;

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

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
`;

export const ProductItemTitle = styled.p`
  margin-right: 0.5rem;
  flex: 1;
`;
export const ProductItemCount = styled.input`
  width: 65px;
  padding: 0.25rem 0.5rem;
  outline: 0;
  border: 1px solid var(--gray-2);
  border-radius: 0.25rem;
`;

export const ProductStock = styled.p`
  position: absolute;
  bottom: -0.9rem;
  color: var(--gray);
  font-size: 0.85rem;
`;

export const InputContainer = styled.label`
  position: relative;
  margin: 1rem 0;
`;

export const InputTitle = styled.p`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  ${input};
`;
export const Textarea = styled.textarea`
  ${input};
  resize: vertical;
  min-height: 100px;
  max-height: 300px;
`;

export const InputError = styled.p`
  color: var(--danger);
  position: absolute;
  bottom: -1.2rem;
  font-size: 0.85rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  background-color: var(--info);
  cursor: pointer;
  color: #fff;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  margin-top: 1rem;

  :not(:hover) {
    opacity: 0.9;
  }

  :active {
    transform: scale(0.98);
  }
`;
