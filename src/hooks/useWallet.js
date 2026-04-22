import { useState } from 'react';

export default function useWallet() {
  const [balance] = useState({
    available: 4250.00,
    escrow: 1800.00,
    currency: 'USD',
    currencies: [
      { code: 'USD', symbol: '$', amount: 4250.00, flag: '🇺🇸' },
      { code: 'EUR', symbol: '€', amount: 3820.00, flag: '🇪🇺' },
      { code: 'GBP', symbol: '£', amount: 3350.00, flag: '🇬🇧' },
    ],
  });

  const [transactions] = useState([
    { id: '1', title: 'Logo Design — TechCorp',  amount: 850, type: 'credit',  date: '2026-04-18' },
    { id: '2', title: 'Withdrawal to Bank',       amount: -500, type: 'debit',  date: '2026-04-17' },
    { id: '3', title: 'Brand Kit — StartupXYZ',   amount: 1200, type: 'credit', date: '2026-04-15' },
    { id: '4', title: 'Subscription Fee',          amount: -29,  type: 'debit',  date: '2026-04-14' },
    { id: '5', title: 'UI Redesign — AppFlow',     amount: 2000, type: 'credit', date: '2026-04-12' },
  ]);

  return { balance, transactions };
}
