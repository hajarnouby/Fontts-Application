import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import FilterPill from '../components/FilterPill';
import ProjectCard from '../components/ProjectCard';
import './ProjectsScreen.css';

const PROJECTS = [
  { id: '1', title: 'TechCorp Brand Redesign', client: 'TechCorp Inc.', status: 'active', progress: 65, checkpoint: 'Concept Revisions' },
  { id: '2', title: 'AppFlow UI Kit', client: 'AppFlow Studio', status: 'in_review', progress: 90, checkpoint: 'Final Delivery' },
  { id: '3', title: 'GreenLeaf Logo', client: 'GreenLeaf Co.', status: 'active', progress: 30, checkpoint: 'Initial Concepts' },
];

export default function ProjectsScreen({ navigation }) {
  const [filter, setFilter] = useState('Active');
  const filters = ['Active', 'Completed', 'Archived'];

  return (
    <div className="wrapscr projects">
      <TopBar title="Projects" />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="pillrow hide-scrollbar">
            {filters.map((f) => (
              <FilterPill key={f} label={f} active={filter === f}
                onPress={() => setFilter(f)} />
            ))}
          </div>

          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.id} {...proj}
              onPress={() => navigation.navigate('Workspace', { project: proj })} />
          ))}
        </div>
      </div>
    </div>
  );
}
