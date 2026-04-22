import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import FilterPill from '../components/FilterPill';
import { BRIEF_CATEGORIES, TIMELINE_OPTIONS } from '../constants';
import './PostBriefScreen.css';

export default function PostBriefScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('Logo Design');
  const [timeline, setTimeline] = useState('1 Week');

  return (
    <div className="wrapscr post-brief">
      <TopBar title="Post a Brief" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <h3 className="seclbl">Brief Title</h3>
          <AppInput placeholder="e.g. Logo Design for Startup"
            value={title} onChangeText={setTitle} />

          <h3 className="seclbl">Category</h3>
          <div className="pillrow hide-scrollbar">
            {BRIEF_CATEGORIES.slice(1).map((cat) => (
              <FilterPill key={cat} label={cat} active={category === cat}
                onPress={() => setCategory(cat)} />
            ))}
          </div>

          <h3 className="seclbl">Description</h3>
          <AppInput placeholder="Describe what you need..."
            value={desc} onChangeText={setDesc} multiline numberOfLines={5} />

          <h3 className="seclbl">Budget (USD)</h3>
          <AppInput placeholder="e.g. 1000" value={budget}
            onChangeText={setBudget} icon="cash-outline" keyboardType="numeric" />

          <h3 className="seclbl">Timeline</h3>
          <div className="pillrow hide-scrollbar">
            {TIMELINE_OPTIONS.map((opt) => (
              <FilterPill key={opt} label={opt} active={timeline === opt}
                onPress={() => setTimeline(opt)} />
            ))}
          </div>

          <div className="btnwrap">
            <AppButton label="Publish Brief" variant="fill" fullWidth
              onPress={() => navigation.goBack()} />
          </div>
        </div>
      </div>
    </div>
  );
}
