import { render, screen, fireEvent } from '@testing-library/react';
import IncomeExpenseTracker from './IncomeExpenseTracker';
import { describe, it, expect } from 'vitest';

describe('IncomeExpenseTracker', () => {
  it('renders and updates balance', () => {
    render(<IncomeExpenseTracker />);
    const incomeInput = screen.getByLabelText(/Income:/i);
    const expenseInput = screen.getByLabelText(/Expense:/i);
    const balance = screen.getByText(/Total Balance:/i);

    fireEvent.change(incomeInput, { target: { value: '1000' } });
    fireEvent.change(expenseInput, { target: { value: '500' } });

    expect(balance).toHaveTextContent('Total Balance: 500');
  });
});
