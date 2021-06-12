import styled from 'styled-components';

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
