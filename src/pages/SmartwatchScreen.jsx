import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Toggle from '../components/Toggle';
import { Ionicons } from '@expo/vector-icons';
import './SmartwatchScreen.css';

export default function SmartwatchScreen({ navigation }) {
  return (
    <div className="wrapscr smartwatch">
      <TopBar title="Smartwatch" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered className="hero">
            <Ionicons name="watch-outline" size={48} color="var(--primary)" />
            <h3 className="t-h4" style={{ marginTop: 12 }}>Connect Your Watch</h3>
            <span className="t-cap" style={{ marginTop: 4, textAlign: 'center' }}>
              Get project notifications and deadline alerts on your wrist.
            </span>
          </Card>
          <Card bordered>
            <div className="row">
              <span className="t-p">Notifications</span>
              <Toggle value={false} onToggle={() => {}} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
