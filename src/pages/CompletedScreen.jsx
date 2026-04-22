import React from 'react';
import TopBar from '../components/TopBar';
import ProjectCard from '../components/ProjectCard';
import './CompletedScreen.css';

const COMPLETED = [
  { id: '1', title: 'PayWave Logo Design', client: 'PayWave', status: 'completed', progress: 100 },
  { id: '2', title: 'StartupXYZ Brand Kit', client: 'StartupXYZ', status: 'completed', progress: 100 },
];

export default function CompletedScreen({ navigation }) {
  return (
    <div className="wrapscr completed">
      <TopBar title="Completed" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <p className="count">{COMPLETED.length} completed projects</p>
          {COMPLETED.map((proj) => (
            <ProjectCard key={proj.id} {...proj} onPress={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}
