import React from 'react';
import {
  InputContainer,
  InputTitle,
  InputElement,
  InputError,
  Textarea
} from './inputStyles';

const Input = ({ title, error, type, ...props }) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      {type === 'textarea' ? (
        <Textarea {...props} />
      ) : (
        <InputElement {...props} type={type} />
      )}

      {error && <InputError>{error}</InputError>}
    </InputContainer>
  );
};

export default Input;
