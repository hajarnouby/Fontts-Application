import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import CheckpointTimeline from '../components/CheckpointTimeline';
import FileRow from '../components/FileRow';
import Divider from '../components/Divider';
import AppButton from '../components/AppButton';
import { Ionicons } from '@expo/vector-icons';
import './WorkspaceScreen.css';

const CHECKPOINTS = [
  { id: '1', name: 'Brief Accepted', status: 'done', subtitle: 'Apr 1' },
  { id: '2', name: 'Initial Concepts', status: 'done', subtitle: 'Apr 5' },
  { id: '3', name: 'Concept Revisions', status: 'active', subtitle: 'In progress' },
  { id: '4', name: 'Final Delivery', status: 'upcoming', subtitle: 'Apr 20' },
  { id: '5', name: 'Client Approval', status: 'upcoming', subtitle: 'Apr 22' },
];

const FILES = [
  { filename: 'Logo_Concept_v3.ai', type: 'figma', size: '2.4 MB', version: 3 },
  { filename: 'Brand_Guidelines.pdf', type: 'pdf', size: '8.1 MB', version: 1 },
  { filename: 'Mockup_Preview.png', type: 'image', size: '1.2 MB', version: 2 },
];

export default function WorkspaceScreen({ navigation }) {
  return (
    <div className="wrapscr workspace">
      <TopBar title="Workspace" onLeft={() => navigation.goBack()}
        rightIcon="chatbubble-outline" />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered className="clcrd">
            <div className="clrow">
              <Avatar size="sm" name="TechCorp" />
              <div className="clinfo">
                <p className="t-p semi">TechCorp Inc.</p>
                <span className="t-cap">Brand Redesign</span>
              </div>
              <Badge label="Active" color="var(--success)" />
            </div>
          </Card>

          <h3 className="sectit">Checkpoints</h3>
          <Card bordered>
            <CheckpointTimeline checkpoints={CHECKPOINTS} />
          </Card>

          <h3 className="sectit">Delivered Files</h3>
          <Card bordered>
            {FILES.map((file, i) => (
              <div key={i}>
                <FileRow {...file} onDownload={() => {}} />
                {i < FILES.length - 1 && <Divider />}
              </div>
            ))}
          </Card>

          <h3 className="sectit">Earnings</h3>
          <Card bordered>
            <div className="earnrow">
              <span className="t-p">Total</span>
              <span className="t-h4" style={{ color: 'var(--success)' }}>$1,200</span>
            </div>
            <div className="earnprog">
              <div className="earnfill" style={{ width: '65%' }} />
            </div>
            <div className="earnrow">
              <span className="t-cap">Received</span>
              <span className="t-cap">$780 / $1,200</span>
            </div>
          </Card>

          <div className="botbtns">
            <AppButton label="Upload Files" variant="out" fullWidth onPress={() => {}} />
            <AppButton label="Mark Complete" variant="fill" fullWidth onPress={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
