import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputField from '../InputField';

describe('INPUT FIELD TEST', () => {
  it('should be rendered and required', () => {
    render(
      <InputField
        attribs={{
          type: 'text',
          required: 'required',
          placeholder: 'Enter username',
        }}
      />
    );
    const inputField = screen.getByPlaceholderText('Enter username');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toBeRequired();
  });

  it('should have a class attribute', () => {
    render(
      <InputField
        attribs={{ placeholder: 'Enter username' }}
        className="inputField"
      />
    );
    expect(screen.getByPlaceholderText('Enter username')).toHaveClass(
      'inputField'
    );
  });
});
