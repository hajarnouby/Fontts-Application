import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import FilterPill from '../components/FilterPill';
import BriefCard from '../components/BriefCard';
import { Ionicons } from '@expo/vector-icons';
import { BRIEF_CATEGORIES } from '../constants';
import './JobsScreen.css';

const MOCK_BRIEFS = [
  { id: '1', title: 'Logo Design for Fintech Startup', company: 'PayWave', budget: '$800–1,200',
    expiry: '2d left', tags: ['Logo', 'Branding'], rating: 4.7 },
  { id: '2', title: 'Brand Identity Package', company: 'GreenLeaf Co.', budget: '$2,000–3,500',
    expiry: '5d left', tags: ['Brand Identity', 'Guidelines'], rating: 4.9 },
  { id: '3', title: 'Mobile App UI Redesign', company: 'AppFlow', budget: '$1,500–2,500',
    expiry: '3d left', tags: ['UI/UX', 'Mobile'], rating: 4.5 },
];

export default function JobsScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <div className="wrapscr jobs">
      <TopBar title="Jobs" rightIcon="options-outline" />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="srchrow">
            <div className="srchbox">
              <Ionicons name="search" size={18} color="var(--text-mut)" className="srchico" />
              <input className="srchtxt" placeholder="Search briefs..."
                value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button className="fltbtn">
              <Ionicons name="funnel-outline" size={18} color="var(--text-pr)" />
            </button>
          </div>

          <div className="tabrow hide-scrollbar">
            <div className="tabrowcon">
              {BRIEF_CATEGORIES.map((cat) => (
                <FilterPill key={cat} label={cat} active={activeFilter === cat}
                  onPress={() => setActiveFilter(cat)} />
              ))}
            </div>
          </div>

          <div className="sortrow">
            <span className="sortlbl">{MOCK_BRIEFS.length} briefs found</span>
            <button className="sorttog">
              <Ionicons name="swap-vertical" size={16} color="var(--text-sec)" />
              <span className="sorttxt">Recent</span>
            </button>
          </div>

          {MOCK_BRIEFS.map((brief) => (
            <BriefCard key={brief.id} {...brief}
              onPress={() => navigation.navigate('BriefDetail', { brief })}
              onBid={() => navigation.navigate('BidSubmit', { brief })} />
          ))}
        </div>
      </div>
    </div>
  );
}
