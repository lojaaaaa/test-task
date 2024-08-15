import { render, screen } from '@testing-library/react';
import { ClearCompletedButton } from './clear-completed-button';
import { describe, it, expect } from 'vitest';


describe('ClearCompletedButton Component', () => {
  it('renders the Clear Completed button', () => {
    render(<ClearCompletedButton />);
    const buttonElement = screen.getByRole('button', { name: /clear completed/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
