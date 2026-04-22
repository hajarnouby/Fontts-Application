import React from 'react';
import TopBar from '../components/TopBar';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import './BriefDetailScreen.css';

export default function BriefDetailScreen({ navigation, route }) {
  const brief = route?.params?.brief || {};

  return (
    <div className="wrapscr brief-detail">
      <TopBar title="Brief Details" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered>
            <div className="bdtop">
              <Avatar size="md" name={brief.company || 'Client'} />
              <div className="bdinfo">
                <span className="t-lbl">{brief.company || 'Client Company'}</span>
                <h3 className="t-h4">{brief.title || 'Brief Title'}</h3>
              </div>
            </div>
            <div className="bdmeta">
              <Badge label={brief.budget || '$1,000–2,000'} color="var(--primary)" />
              <div className="bdexp">
                <Ionicons name="time-outline" size={14} color="var(--warning)" />
                <span className="bdexptxt">{brief.expiry || '3d left'}</span>
              </div>
            </div>
          </Card>

          <h3 className="sectit">Description</h3>
          <Card>
            <p className="desc-txt">
              We are looking for a talented designer to create a modern, memorable logo
              that captures our brand essence. The design should be versatile, working
              across digital and print media. We value creativity, clean aesthetics,
              and attention to detail.
            </p>
          </Card>

          <h3 className="sectit">Requirements</h3>
          <Card>
            {['3 initial concepts', 'Source files (AI, EPS, SVG)',
              'Brand color variations', '2 rounds of revisions'].map((req, i) => (
              <div key={i} className="reqrow">
                <Ionicons name="checkmark-circle" size={18} color="var(--success)" />
                <span className="reqtxt">{req}</span>
              </div>
            ))}
          </Card>

          <h3 className="sectit">Tags</h3>
          <div className="tagrow">
            {(brief.tags || ['Logo', 'Branding', 'Modern']).map((tag, i) => (
              <span key={i} className="tagpill">
                <span className="tagtxt">{tag}</span>
              </span>
            ))}
          </div>

          <div className="btnrow">
            <AppButton label="Submit a Bid" variant="fill" fullWidth
              onPress={() => navigation.navigate('BidSubmit', { brief })} />
          </div>
        </div>
      </div>
    </div>
  );
}
