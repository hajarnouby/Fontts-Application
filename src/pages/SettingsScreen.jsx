import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Toggle from '../components/Toggle';
import Divider from '../components/Divider';
import { Ionicons } from '@expo/vector-icons';
import './SettingsScreen.css';

export default function SettingsScreen({ navigation }) {
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const SettingRow = ({ icon, label, right, onPress }) => (
    <div className="setrow" onClick={onPress} style={onPress ? { cursor: 'pointer' } : {}}>
      <Ionicons name={icon} size={20} color="var(--text-pr)" className="setico" />
      <span className="settxt">{label}</span>
      <span className="setright">{right}</span>
    </div>
  );

  return (
    <div className="wrapscr settings">
      <TopBar title="Settings" onLeft={() => navigation.goBack()} />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="miniprf">
            <Avatar size="sm" name="Hajar Ahmed" />
            <div className="mpinfo">
              <span className="mpname">Hajar Ahmed</span>
              <Badge label="Expert" color="var(--primary)" />
            </div>
            <button className="mpedit">Edit</button>
          </div>

          <p className="seclbl">Notifications</p>
          <div className="secgrp">
            <SettingRow icon="notifications-outline" label="Push Notifications"
              right={<Toggle value={pushNotif} onToggle={() => setPushNotif(!pushNotif)} />} />
            <Divider />
            <SettingRow icon="mail-outline" label="Email Notifications"
              right={<Toggle value={emailNotif} onToggle={() => setEmailNotif(!emailNotif)} />} />
          </div>

          <p className="seclbl">Appearance</p>
          <div className="secgrp">
            <SettingRow icon="moon-outline" label="Dark Mode"
              right={<Toggle value={darkMode} onToggle={() => setDarkMode(!darkMode)} color="var(--primary)" />} />
          </div>

          <p className="seclbl">Security</p>
          <div className="secgrp">
            <SettingRow icon="shield-outline" label="Two-Factor Auth"
              right={<Toggle value={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} />} />
            <Divider />
            <SettingRow icon="key-outline" label="Change Password"
              right={<Ionicons name="chevron-forward" size={18} color="var(--text-mut)" />}
              onPress={() => {}} />
          </div>

          <p className="seclbl">Danger Zone</p>
          <div className="secgrp">
            <SettingRow icon="trash-outline" label="Delete Account"
              right={<span className="dangtxt">Delete</span>} onPress={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
