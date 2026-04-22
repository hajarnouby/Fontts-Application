import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import AppInput from '../components/AppInput';
import FilterPill from '../components/FilterPill';
import BriefCard from '../components/BriefCard';
import { BRIEF_CATEGORIES } from '../constants';
import './FindWorkScreen.css';

const BRIEFS = [
  { id: '1', title: 'Brand Identity for Coffee Shop', company: 'BrewCo', budget: '$1,200', expiry: '2d left', tags: ['Logo', 'Branding'] },
  { id: '2', title: 'Mobile App UI/UX Design', company: 'TechStart', budget: '$2,500', expiry: '5d left', tags: ['UI', 'UX', 'Figma'] },
  { id: '3', title: '3D Product Rendering', company: 'GadgetInc', budget: '$800', expiry: '1d left', tags: ['3D', 'Blender'] },
];

export default function FindWorkScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  return (
    <div className="wrapscr find-work">
      <TopBar title="Find Work" rightIcon="filter-outline" />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <AppInput placeholder="Search briefs, clients, skills..." value={search} onChangeText={setSearch} icon="search-outline" />
          <div className="catrow hide-scrollbar">
            {BRIEF_CATEGORIES.map((c) => (
              <FilterPill key={c} label={c} active={cat === c} onPress={() => setCat(c)} />
            ))}
          </div>

          <p className="reslbl">Showing {BRIEFS.length} active briefs</p>
          {BRIEFS.map((brief) => (
            <BriefCard key={brief.id} {...brief}
              onPress={() => navigation.navigate('BriefDetail', { brief })}
              onBid={() => navigation.navigate('BidSubmit', { brief })} />
          ))}
        </div>
      </div>
    </div>
  );
}
