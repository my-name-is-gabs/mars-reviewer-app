import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import user from '@testing-library/user-event';
import Button from '../Button';

describe('TESTING BUTTON COMPONENT', () => {
  it('should display text value', () => {
    render(<Button children="Submit" />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should have a class attribute', () => {
    render(<Button className="login-and-register-btn" />);
    expect(screen.getByRole('button')).toHaveClass('login-and-register-btn');
  });

  it('should test the click function', async () => {
    const mockOnClick = vi.fn();
    render(<Button children="sample" onClick={mockOnClick} />);
    const clicked = screen.getByRole('button', { name: 'sample' });
    await user.click(clicked);
    expect(mockOnClick).toBeCalled();
  });
});
