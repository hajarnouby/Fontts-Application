import React from 'react';
import TopBar from '../components/TopBar';
import { Ionicons } from '@expo/vector-icons';
import './HelpScreen.css';

export default function HelpScreen({ navigation }) {
  const items = [
    { icon: 'chatbubble-ellipses-outline', label: 'Live Chat Support' },
    { icon: 'help-circle-outline', label: 'FAQ' },
    { icon: 'mail-outline', label: 'Email Support' },
    { icon: 'document-text-outline', label: 'Terms of Service' },
    { icon: 'shield-outline', label: 'Privacy Policy' },
  ];

  return (
    <div className="wrapscr help">
      <TopBar title="Help & Support" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          {items.map((item, i) => (
            <button key={i} className="helprow">
              <Ionicons name={item.icon} size={20} color="var(--text-pr)" />
              <span className="helptxt">{item.label}</span>
              <Ionicons name="chevron-forward" size={18} color="var(--text-mut)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
