import React from 'react';
import {
  InputContainer,
  InputTitle,
  InputElement,
  InputError,
  Textarea
} from './inputStyles';

const Input = React.forwardRef(
  ({ title, error, type = 'text', ...props }, ref) => {
    return (
      <InputContainer>
        <InputTitle>{title}</InputTitle>
        {type === 'textarea' ? (
          <Textarea {...props} ref={ref} />
        ) : (
          <InputElement {...props} type={type} ref={ref} />
        )}

        {error && <InputError>{error}</InputError>}
      </InputContainer>
    );
  }
);

export default Input;
