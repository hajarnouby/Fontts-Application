import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import './AIScannerScreen.css';

export default function AIScannerScreen({ navigation }) {
  return (
    <div className="wrapscr ai-scanner">
      <TopBar title="AI Scanner" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered className="logocrd">
            <div className="logoprev">
              <Ionicons name="scan" size={48} color="var(--primary)" />
              <span className="t-cap" style={{ marginTop: 10 }}>Upload a logo to scan</span>
            </div>
          </Card>

          <Card bordered>
            <p className="t-cap scrlbl">Originality Score</p>
            <div className="scrring">
              <span className="scnum">94</span>
              <span className="scpct">%</span>
            </div>
            <p className="scgrade">Strong Originality</p>
          </Card>

          <h3 className="sectit">AI Recommendations</h3>
          <Card bordered>
            <div className="airow">
              <Ionicons name="sparkles" size={18} color="var(--primary)" />
              <span className="aitit">Suggestions</span>
            </div>
            {['Consider simplifying the icon for small sizes',
              'Color contrast meets accessibility standards',
              'Unique enough for trademark registration'].map((tip, i) => (
              <div key={i} className="aidotrow">
                <span className="aidot" />
                <span className="aitxt">{tip}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
