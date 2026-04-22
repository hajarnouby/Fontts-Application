import React from 'react';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import './UrgentWorkScreen.css';

export default function UrgentWorkScreen({ navigation }) {
  return (
    <div className="wrapscr urgent-work">
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="header">
            <h2 className="t-h3">Urgent Work</h2>
            <span className="t-cap">Post high-priority jobs</span>
          </div>

          <Card bordered className="hero">
            <Ionicons name="flash" size={32} color="var(--warning)" />
            <h3 className="t-h4" style={{ marginTop: 10 }}>Need it fast?</h3>
            <span className="t-cap" style={{ marginTop: 4, textAlign: 'center' }}>
              Post urgent work listings and get responses within hours.
              Premium rates attract top talent instantly.
            </span>
            <AppButton label="Post Urgent Work" variant="fill"
              onPress={() => navigation.navigate('Jobs', { screen: 'PostBrief' })} />
          </Card>

          <h3 className="sectit">Active Urgent Listings</h3>
          <div className="empty">
            <Ionicons name="time-outline" size={40} color="var(--text-mut)" />
            <span className="emtxt">No urgent listings yet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
