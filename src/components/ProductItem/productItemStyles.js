import styled from 'styled-components';

export const ProductItemContainer = styled.li`
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
