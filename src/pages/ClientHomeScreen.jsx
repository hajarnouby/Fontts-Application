import React from 'react';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import ClientProjectCard from '../components/ClientProjectCard';
import { Ionicons } from '@expo/vector-icons';
import './ClientHomeScreen.css';

export default function ClientHomeScreen({ navigation }) {
  return (
    <div className="wrapscr client-home">
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="hrow">
            <div className="hinfo">
              <span className="t-lbl">Welcome back 👋</span>
              <h2 className="t-h3">TechCorp</h2>
            </div>
            <Avatar size="sm" name="TechCorp" ring ringColor="var(--primary)" />
          </div>

          <div className="statrow">
            <StatCard icon="document-text" label="Active Briefs" value="4"
              color="var(--primary)" />
            <StatCard icon="people" label="Hired Designers" value="7"
              color="var(--success)" bg="var(--green-a)" />
          </div>

          <div className="qarow">
            <button className="qabtn"
              onClick={() => navigation.navigate('Jobs', { screen: 'PostBrief' })}>
              <Ionicons name="add-circle" size={20} color="var(--text-pr)" />
              <span className="qatxt">Post a Brief</span>
            </button>
            <button className="qabtn2"
              onClick={() => navigation.navigate('Urgent')}>
              <Ionicons name="flash" size={20} color="var(--warning)" />
              <span className="qatxt">Urgent Work</span>
            </button>
          </div>

          <div className="sechead">
            <h3 className="t-h4">My Projects</h3>
            <button className="seeall"
              onClick={() => navigation.navigate('Projects')}>
              See All
            </button>
          </div>

          <ClientProjectCard title="Brand Redesign" designer="Hajar Ahmed"
            status="active" progress={65}
            onPress={() => navigation.navigate('Projects', { screen: 'ClientWorkspace' })} />
          <ClientProjectCard title="App UI Kit" designer="Sara K."
            status="in_review" progress={90}
            onPress={() => navigation.navigate('Projects', { screen: 'ClientWorkspace' })} />
          <ClientProjectCard title="Packaging Design" status="active"
            bidsCount={12} progress={0} onPress={() => {}} />
        </div>
      </div>
    </div>
  );
}
