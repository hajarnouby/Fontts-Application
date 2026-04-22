import React from 'react';
import TopBar from '../components/TopBar';
import Badge from '../components/Badge';
import { Ionicons } from '@expo/vector-icons';
import './UrgentMoneyScreen.css';

const URGENT_JOBS = [
  { id: '1', title: 'Logo needed in 24h', budget: '$500', time: '24h', client: 'FastBrand' },
  { id: '2', title: 'Social media pack ASAP', budget: '$350', time: '12h', client: 'ViralCo' },
  { id: '3', title: 'Business card design', budget: '$150', time: '6h', client: 'PrintHub' },
];

export default function UrgentMoneyScreen({ navigation }) {
  return (
    <div className="wrapscr urgent-money">
      <TopBar title="Urgent Money 🔥" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="herocrd">
            <Ionicons name="flash" size={28} color="var(--warning)" />
            <h3 className="t-h4" style={{ marginTop: 8 }}>Quick Cash Jobs</h3>
            <span className="t-cap" style={{ marginTop: 4 }}>
              High-priority briefs with premium pay and tight deadlines.
            </span>
          </div>

          {URGENT_JOBS.map((job) => (
            <div key={job.id} className="ujob"
              onClick={() => navigation.navigate('BriefDetail', { brief: job })}
              style={{ cursor: 'pointer' }}>
              <div className="ujobtop">
                <div className="utimepill">
                  <Ionicons name="time" size={12} color="var(--accent)" />
                  <span className="utimetxt">{job.time}</span>
                </div>
                <Badge label={job.budget} color="var(--success)" />
              </div>
              <p className="ujobtit">{job.title}</p>
              <span className="ujobcl">{job.client}</span>
              <button className="ubidbtn"
                onClick={(e) => { e.stopPropagation(); navigation.navigate('BidSubmit', { brief: job }); }}>
                <span className="ubidtxt">Quick Bid</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
