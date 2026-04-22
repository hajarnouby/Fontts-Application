import React from 'react';
import TopBar from '../components/TopBar';
import { Ionicons } from '@expo/vector-icons';
import './ArchivedScreen.css';

export default function ArchivedScreen({ navigation }) {
  return (
    <div className="wrapscr archived">
      <TopBar title="Archived" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="empty">
            <Ionicons name="archive-outline" size={48} color="var(--text-mut)" />
            <h3 className="emtit">No Archived Projects</h3>
            <p className="emsub">Projects you archive will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
