import './App.css';
import IncomeExpenseTracker from './IncomeExpenseTracker';
import DataFetcher from './DataFetcher';
import FinancialChart from './FinancialChart';
import Login from './Login';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const incomeData = [5000, 6000, 7500, 8200, 9000, 10000];
  const expenseData = [3000, 3400, 2900, 4100, 4800, 5200];

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <div>
          <h2>Welcome back!</h2>
          <IncomeExpenseTracker />
          <DataFetcher />
          <FinancialChart income={incomeData} expenses={expenseData} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
