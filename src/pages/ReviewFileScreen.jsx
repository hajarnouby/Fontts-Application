import React from 'react';
import TopBar from '../components/TopBar';
import AppButton from '../components/AppButton';
import { Ionicons } from '@expo/vector-icons';
import './ReviewFileScreen.css';

export default function ReviewFileScreen({ navigation }) {
  return (
    <div className="wrapscr review-file">
      <TopBar title="Review File" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="preview">
            <Ionicons name="image-outline" size={64} color="var(--text-mut)" />
            <span className="prevtxt">File Preview Area</span>
          </div>

          <div className="metarow">
            <p className="t-p semi">Logo_Concept_v3.ai</p>
            <span className="t-cap">Version 3 · 2.4 MB · Apr 15, 2026</span>
          </div>

          <div className="btnrow">
            <AppButton label="Approve" variant="fill" fullWidth onPress={() => navigation.goBack()} />
            <AppButton label="Request Changes" variant="out" fullWidth onPress={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
