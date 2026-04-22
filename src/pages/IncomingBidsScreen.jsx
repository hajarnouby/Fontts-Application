import React from 'react';
import TopBar from '../components/TopBar';
import BidReviewCard from '../components/BidReviewCard';
import './IncomingBidsScreen.css';

const BIDS = [
  { id: '1', designerName: 'Hajar Ahmed', amount: 950, timeline: '5 days', rating: 4.9,
    pitch: 'I specialize in modern brand identity with 5+ years experience.' },
  { id: '2', designerName: 'Sara K.', amount: 1200, timeline: '7 days', rating: 4.7,
    pitch: 'Award-winning designer. I can deliver stunning concepts.' },
  { id: '3', designerName: 'Omar M.', amount: 800, timeline: '3 days', rating: 4.5,
    pitch: 'Fast turnaround with exceptional quality guaranteed.' },
];

export default function IncomingBidsScreen({ navigation }) {
  return (
    <div className="wrapscr incoming-bids">
      <TopBar title="Incoming Bids" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <p className="count">{BIDS.length} bids for "Brand Redesign"</p>
          {BIDS.map((bid) => (
            <BidReviewCard key={bid.id} {...bid}
              onAccept={() => {}} onReject={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}
