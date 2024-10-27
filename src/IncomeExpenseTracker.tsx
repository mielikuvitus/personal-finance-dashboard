import React, { useState } from 'react';

const IncomeExpenseTracker: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <div>
        <label htmlFor="income">Income: </label>
        <input
          id="income"
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="expense">Expense: </label>
        <input
          id="expense"
          type="number"
          value={expense}
          onChange={(e) => setExpense(Number(e.target.value))}
        />
      </div>
      <h2>Total Balance: {income - expense} </h2>
    </div>
  );
};

export default IncomeExpenseTracker;
