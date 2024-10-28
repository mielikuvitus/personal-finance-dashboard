import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { beforeEach, describe, expect, it, vi } from 'vitest';

//Mock localstorage and a mock function for setIsAuthenticated
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  },
  writable: true,
});

describe('Login Component', () => {
  const mockSetIsAuthenticated = vi.fn();
  beforeEach(() => {
    //Clear mocks before each test to avoid cross-test contamination
    vi.clearAllMocks();
  });

  it('renders login form', () => {
    render(<Login setIsAuthenticated={mockSetIsAuthenticated} />);
    //Simulate entering correct credentials
    fireEvent.change(screen.getByLabelText(/Username:/i), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByLabelText(/Password:/i), {
      target: { value: 'password' },
    });

    //Click Login Button
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    //Verify localStorage.setItem was called with the token
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      'mock-jwt-token'
    );

    //Verify that setIsAuthenticated was called to update the authenticated state
    expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
  });

  it('handles failed login with an alert', () => {
    render(<Login setIsAuthenticated={mockSetIsAuthenticated} />);

    //Enter wrong credentials
    fireEvent.change(screen.getByLabelText(/Username:/i), {
      target: { value: 'wrong user' },
    });
    fireEvent.change(screen.getByLabelText(/Password:/i), {
      target: { value: 'wrong password' },
    });

    //Click Login
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    //Since this is a failure case, we don't expect setIsAuthenticated to be called
    expect(mockSetIsAuthenticated).not.toHaveBeenCalled();
  });
});
