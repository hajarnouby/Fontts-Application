import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import FilterPill from '../components/FilterPill';
import Badge from '../components/Badge';
import { Ionicons } from '@expo/vector-icons';
import { TIMELINE_OPTIONS } from '../constants';
import './BidSubmitScreen.css';

export default function BidSubmitScreen({ navigation, route }) {
  const brief = route?.params?.brief || {};
  const [amount, setAmount] = useState('');
  const [timeline, setTimeline] = useState('1 Week');
  const [pitch, setPitch] = useState('');

  return (
    <div className="wrapscr bid-submit">
      <TopBar title="Submit Bid" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered className="bsumcrd">
            <span className="t-lbl">{brief.company || 'Client'}</span>
            <h3 className="t-h4" style={{ marginTop: 4 }}>{brief.title || 'Brief'}</h3>
            <Badge label={brief.budget || '$1,000'} color="var(--primary)" />
          </Card>

          <h3 className="sechead">Your Price</h3>
          <AppInput placeholder="Enter amount" value={amount}
            onChangeText={setAmount} icon="cash-outline" keyboardType="numeric" />

          <h3 className="sechead">Timeline</h3>
          <div className="timepills hide-scrollbar" style={{ overflowX: 'auto' }}>
            {TIMELINE_OPTIONS.map((opt) => (
              <FilterPill key={opt} label={opt} active={timeline === opt}
                onPress={() => setTimeline(opt)} />
            ))}
          </div>

          <h3 className="sechead">Your Pitch</h3>
          <AppInput placeholder="Describe your approach, experience, and what makes you the best fit..."
            value={pitch} onChangeText={setPitch} multiline numberOfLines={5} />
          <p className="pitchcnt">{pitch.length}/500</p>

          <h3 className="sechead">Attachments</h3>
          <div className="attrow">
            <button className="attdash">
              <Ionicons name="add" size={24} color="var(--text-mut)" />
              <span className="attlbl">Add File</span>
            </button>
          </div>

          <div className="subwrap">
            <AppButton label="Submit Bid" variant="fill" fullWidth
              onPress={() => navigation.goBack()} />
            <p className="subnote">
              You can withdraw your bid before the client accepts it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
