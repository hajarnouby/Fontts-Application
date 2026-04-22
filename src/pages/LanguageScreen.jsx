import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import { Ionicons } from '@expo/vector-icons';
import './LanguageScreen.css';

const LANGS = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇪🇬' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export default function LanguageScreen({ navigation }) {
  const [selected, setSelected] = useState('en');

  return (
    <div className="wrapscr language">
      <TopBar title="Language" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          {LANGS.map((lang) => (
            <button key={lang.code} className="langrow"
              onClick={() => setSelected(lang.code)}>
              <span className="flag">{lang.flag}</span>
              <span className="langtxt">{lang.label}</span>
              {selected === lang.code && (
                <Ionicons name="checkmark-circle" size={20} color="var(--primary)" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
