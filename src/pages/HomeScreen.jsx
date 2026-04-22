import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import AppButton from '../components/AppButton';
import BriefCard from '../components/BriefCard';
import { Ionicons } from '@expo/vector-icons';
import './HomeScreen.css';

const URGENT_BRIEFS = [
  { id: '1', title: 'Need a Logo ASAP', company: 'FastStartup', budget: '$500', expiry: 'Ends in 2h', rating: 4.8 },
  { id: '2', title: 'Social Media Assets for Campaign', company: 'ViralAgency', budget: '$300', expiry: 'Ends in 5h', rating: 4.5 },
];

export default function HomeScreen({ navigation }) {
  return (
    <div className="wrapscr home">
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="hhead">
            <div className="hinf">
              <span className="t-lbl">Welcome back 👋</span>
              <h2 className="t-h3">Hajar Ahmed</h2>
            </div>
            <Avatar size="sm" name="Hajar Ahmed" ring ringColor="var(--primary)" />
          </div>

          <Card bordered className="balcrd">
            <div className="balrow">
              <div>
                <span className="t-cap">Available Balance</span>
                <h3 className="balamt">$4,250.00</h3>
              </div>
              <button className="balbtn" onClick={() => navigation.navigate('Profile', { screen: 'Wallet' })}>
                Withdraw
              </button>
            </div>
          </Card>

          <div className="quickcrd">
            <button className="qbtn" onClick={() => navigation.navigate('Urgent')}>
              <div className="qico" style={{ backgroundColor: 'var(--amber-a)' }}>
                <Ionicons name="flash" size={24} color="var(--warning)" />
              </div>
              <span className="qtxt">Urgent Cash</span>
            </button>
            <button className="qbtn" onClick={() => navigation.navigate('SkillHub')}>
              <div className="qico" style={{ backgroundColor: 'var(--purple-a)' }}>
                <Ionicons name="school" size={24} color="var(--primary)" />
              </div>
              <span className="qtxt">SkillHub</span>
            </button>
          </div>

          <div className="sechead">
            <h3 className="t-h4">Urgent Briefs 🔥</h3>
            <button className="seeall" onClick={() => navigation.navigate('Jobs', { screen: 'FindWork' })}>
              See All
            </button>
          </div>

          {URGENT_BRIEFS.map((brief) => (
            <BriefCard key={brief.id} {...brief}
              onPress={() => navigation.navigate('BriefDetail', { brief })}
              onBid={() => navigation.navigate('BidSubmit', { brief })} />
          ))}

        </div>
      </div>
    </div>
  );
}
