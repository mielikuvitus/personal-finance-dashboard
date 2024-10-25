import './App.css';
import IncomeExpenseTracker from './IncomeExpenseTracker';
import DataFetcher from './DataFetcher';
import FinancialChart from './FinancialChart';

const App: React.FC = () => {
  const incomeData = [5000, 6000, 7500, 8200, 9000, 10000];
  const expenseData = [3000, 3400, 2900, 4100, 4800, 5200];

  return (
    <>
      <IncomeExpenseTracker />
      <DataFetcher />
      <FinancialChart income={incomeData} expenses={expenseData} />
    </>
  );
};

export default App;
