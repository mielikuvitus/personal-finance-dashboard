import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/transactions', () => {
    return HttpResponse.json([
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
      {
        status: 'DECLINED',
        created: '2014-11-05T14:20:36Z',
        authCode: '654321',
        token: 'zXt4h7W3D2tmOfYxl2msnLbUirB=',
        currency: 'GBP',
        amount: '120.99',
        id: 'EMU254189576',
      },
      {
        status: 'AUTHORIZED',
        created: '2014-11-06T10:15:10Z',
        authCode: '789101',
        token: 'aBc5h7W3D2tmOfYxl2msnLbUirC=',
        currency: 'CAD',
        amount: '250.75',
        id: 'EMU254189577',
      },
      {
        status: 'CAPTURED',
        created: '2014-11-07T08:45:00Z',
        authCode: '101112',
        token: 'dEf6h7W3D2tmOfYxl2msnLbUirD=',
        currency: 'AUD',
        amount: '99.99',
        id: 'EMU254189578',
      },
    ]);
  }),
];
