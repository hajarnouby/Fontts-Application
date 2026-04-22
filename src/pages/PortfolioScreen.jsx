import React from 'react';
import TopBar from '../components/TopBar';
import { Ionicons } from '@expo/vector-icons';
import './PortfolioScreen.css';

export default function PortfolioScreen({ navigation }) {
  return (
    <div className="wrapscr portfolio">
      <TopBar title="Portfolio" onLeft={() => navigation.goBack()} rightIcon="add-outline" />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="grid">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="tile">
                <Ionicons name="image" size={32} color="var(--text-mut)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
