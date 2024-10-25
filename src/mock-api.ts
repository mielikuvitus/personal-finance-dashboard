interface TransactionData {
  status: string;
  created: string;
  authCode: string;
  token: string;
  currency: string;
  amount: string;
  id: string;
}

export function fetchTransactions(): Promise<TransactionData[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data: TransactionData[] = [
        {
          status: 'CAPTURED',
          created: '2014-11-03T16:41:42Z',
          authCode: '792668',
          token: 'bFy3h7W3D2tmOfYxl2msnLbUirY=',
          currency: 'USD',
          amount: '10.55',
          id: 'EMU254189574',
        },
        {
          status: 'PENDING',
          created: '2014-11-04T12:34:56Z',
          authCode: '123456',
          token: 'xYz3h7W3D2tmOfYxl2msnLbUirA=',
          currency: 'EUR',
          amount: '45.00',
          id: 'EMU254189575',
        },
      ];

      // Simulate success or failure with a random boolean
      if (Math.random() > 0.2) {
        resolve(data);
      } else {
        reject('Failed to fetch data');
      }
    }, 1000); // Simulated delay of 1 second
  });
}
