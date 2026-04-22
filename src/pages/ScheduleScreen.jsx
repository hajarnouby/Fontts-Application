import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import './ScheduleScreen.css';

export default function ScheduleScreen({ navigation }) {
  return (
    <div className="wrapscr schedule">
      <TopBar title="Schedule" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered>
            <div className="calhead">
              <h3 className="t-h4">April 2026</h3>
            </div>
            <div className="empty">
              <Ionicons name="calendar-outline" size={48} color="var(--text-mut)" />
              <span className="emtxt">No deadlines this week</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
