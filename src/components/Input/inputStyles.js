import styled, { css } from 'styled-components';

const input = css`
  padding: 0.5rem 1rem;
  outline: 0;
  border: 1px solid var(--gray-2);
  border-radius: 0.25rem;
  width: 100%;
`;
export const InputContainer = styled.label`
  position: relative;
  margin: 1rem 0;
`;

export const InputTitle = styled.p`
  margin-bottom: 0.5rem;
`;

export const InputElement = styled.input`
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
