import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import CheckpointTimeline from '../components/CheckpointTimeline';
import AppButton from '../components/AppButton';
import './ClientWorkspaceScreen.css';

const CHECKPOINTS = [
  { id: '1', name: 'Brief Accepted', status: 'done', subtitle: 'Apr 1' },
  { id: '2', name: 'Initial Concepts', status: 'done', subtitle: 'Apr 5' },
  { id: '3', name: 'Revisions', status: 'active', subtitle: 'In progress' },
  { id: '4', name: 'Final Delivery', status: 'upcoming', subtitle: 'Apr 20' },
];

export default function ClientWorkspaceScreen({ navigation }) {
  return (
    <div className="wrapscr client-workspace">
      <TopBar title="Workspace" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered>
            <div className="desrow">
              <Avatar size="sm" name="Hajar Ahmed" />
              <div className="desinfo">
                <p className="t-p semi">Hajar Ahmed</p>
                <span className="t-cap">Designer · ★ 4.9</span>
              </div>
              <Badge label="Active" color="var(--success)" />
            </div>
          </Card>

          <h3 className="sectit">Progress</h3>
          <Card bordered>
            <CheckpointTimeline checkpoints={CHECKPOINTS} />
          </Card>

          <div className="btnrow">
            <AppButton label="View Files" variant="out" fullWidth onPress={() => {}} />
            <AppButton label="Send Message" variant="fill" fullWidth onPress={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
