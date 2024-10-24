import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface TransactionData {
  status: string;
  created: string;
  authCode: string;
  token: string;
  currency: string;
  amount: string;
  id: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<TransactionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('/api/transactions')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch data:');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Fetched Transactional Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.status} - {item.amount} {item.currency} on {item.created}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
