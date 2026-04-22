import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import Divider from '../components/Divider';
import { Ionicons } from '@expo/vector-icons';
import useWallet from '../hooks/useWallet';
import { formatCurrency } from '../utils/helpers';
import './WalletScreen.css';

export default function WalletScreen({ navigation }) {
  const { balance, transactions } = useWallet();
  const [currTab, setCurrTab] = useState('USD');

  return (
    <div className="wrapscr wallet">
      <TopBar title="Wallet" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered className="balhero">
            <span className="ballbl">Available Balance</span>
            <h2 className="balnum">$4,250.00</h2>
            <div className="balesc">
              <Ionicons name="lock-closed" size={12} color="var(--text-mut)" />
              <span className="t-cap" style={{ marginLeft: 4 }}>$1,800 in escrow</span>
            </div>
          </Card>

          <div className="qarow">
            {[
              { icon: 'arrow-up', label: 'Send' },
              { icon: 'arrow-down', label: 'Receive' },
              { icon: 'swap-horizontal', label: 'Convert' },
              { icon: 'card', label: 'Withdraw' },
            ].map((qa) => (
              <button key={qa.label} className="qacol">
                <div className="qacir">
                  <Ionicons name={qa.icon} size={18} color="var(--primary)" />
                </div>
                <span className="qalbl">{qa.label}</span>
              </button>
            ))}
          </div>

          <h3 className="txnhead">Transactions</h3>
          {transactions.map((txn) => (
            <div key={txn.id} className="txnrow">
              <div className="txnico"
                style={{ backgroundColor: txn.amount > 0 ? 'var(--green-a)' : 'var(--white-10)' }}>
                <Ionicons name={txn.amount > 0 ? 'arrow-down' : 'arrow-up'}
                  size={16} color={txn.amount > 0 ? 'var(--success)' : 'var(--text-sec)'} />
              </div>
              <div className="txncol">
                <p className="txntit">{txn.title}</p>
                <span className="txndate">{txn.date}</span>
              </div>
              <span className={txn.amount > 0 ? 'txnamt' : 'txnamtn'}>
                {formatCurrency(txn.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
