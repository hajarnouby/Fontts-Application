import React from 'react';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import './SkillHubScreen.css';

const COURSES = [
  { id: '1', title: 'Logo Design Masterclass', level: 'Beginner', lessons: 12, icon: 'color-palette' },
  { id: '2', title: 'Advanced Typography', level: 'Advanced', lessons: 8, icon: 'text' },
  { id: '3', title: 'Brand Strategy 101', level: 'Intermediate', lessons: 15, icon: 'bulb' },
  { id: '4', title: 'Motion Graphics Basics', level: 'Beginner', lessons: 10, icon: 'videocam' },
];

export default function SkillHubScreen() {
  return (
    <div className="wrapscr skillhub">
      <div className="header">
        <h2 className="t-h3">SkillHub</h2>
        <span className="t-cap">Level up your design skills</span>
      </div>
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <Card bordered className="stkcrd">
            <div className="stkrow">
              <Ionicons name="flame" size={24} color="var(--warning)" />
              <div className="stkinfo">
                <p className="t-p" style={{ fontWeight: 600 }}>7 Day Streak 🔥</p>
                <span className="t-cap">Keep learning to maintain your streak!</span>
              </div>
            </div>
          </Card>

          <h3 className="sectit">Recommended Courses</h3>
          {COURSES.map((course) => (
            <button key={course.id} className="crsrow">
              <div className="crsico">
                <Ionicons name={course.icon} size={22} color="var(--primary)" />
              </div>
              <div className="crsinfo">
                <p className="crstit">{course.title}</p>
                <span className="crsmeta">{course.level} · {course.lessons} lessons</span>
              </div>
              <Ionicons name="chevron-forward" size={18} color="var(--text-mut)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
