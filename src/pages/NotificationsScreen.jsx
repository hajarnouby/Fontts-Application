import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import FilterPill from '../components/FilterPill';
import { Ionicons } from '@expo/vector-icons';
import './NotificationsScreen.css';

const NOTIFS = [
  { id: '1', title: 'New bid accepted!', body: 'TechCorp accepted your bid for Brand Redesign.', time: '2m ago', read: false, icon: 'checkmark-circle', color: 'var(--success)', group: 'TODAY' },
  { id: '2', title: 'Payment received', body: 'You received $850 for Logo Design.', time: '1h ago', read: false, icon: 'cash', color: 'var(--success)', group: 'TODAY' },
  { id: '3', title: 'New brief posted', body: 'A new UI/UX brief matches your skills.', time: '3h ago', read: true, icon: 'briefcase', color: 'var(--primary)', group: 'TODAY' },
  { id: '4', title: 'Review requested', body: 'Client requested changes on mockup v2.', time: '1d ago', read: true, icon: 'create', color: 'var(--warning)', group: 'YESTERDAY' },
  { id: '5', title: 'Milestone completed', body: 'Initial Concepts phase is done.', time: '2d ago', read: true, icon: 'flag', color: 'var(--primary)', group: 'YESTERDAY' },
];

export default function NotificationsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');
  const groups = [...new Set(NOTIFS.map((n) => n.group))];

  return (
    <div className="wrapscr notifications">
      <TopBar title="Notifications" onLeft={() => navigation.goBack()}
        rightIcon="checkmark-done-outline" />
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <div className="pillrow hide-scrollbar">
            {['All', 'Unread', 'Bids', 'Payments'].map((f) => (
              <FilterPill key={f} label={f} active={filter === f}
                onPress={() => setFilter(f)} />
            ))}
          </div>

          {groups.map((group) => (
            <div key={group}>
              <p className="grplbl">{group}</p>
              {NOTIFS.filter((n) => n.group === group).map((notif) => (
                <button key={notif.id}
                  className={`notifrow ${notif.read ? 'notifbg-r' : 'notifbg-u'}`}>
                  {!notif.read && <span className="notifbar" />}
                  <div className="notifico" style={{ backgroundColor: notif.color + '18' }}>
                    <Ionicons name={notif.icon} size={18} color={notif.color} />
                  </div>
                  <div className="notifcol">
                    <p className={notif.read ? 'notiftit-r' : 'notiftit'}>{notif.title}</p>
                    <span className="notifsub">{notif.body}</span>
                  </div>
                  <div className="notifmeta">
                    <span className="notiftime">{notif.time}</span>
                    {!notif.read && <span className="notifdot" />}
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
