import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';
import { fetchTransactions } from './mock-api';
import { describe, vi, it, expect } from 'vitest';

vi.mock('./mock-api', () => ({
  fetchTransactions: vi.fn(),
}));

describe('DataFetcher', () => {
  it('fetches and displays transactions', async () => {
    (fetchTransactions as ReturnType<typeof vi.fn>).mockResolvedValue([
      { status: 'CAPTURED', amount: '10.55', currency: 'USD', id: '1' },
    ]);

    render(<DataFetcher />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/CAPTURED/i)).toBeInTheDocument()
    );
    expect(screen.getByText(/10.55 USD/i)).toBeInTheDocument();
  });
});
