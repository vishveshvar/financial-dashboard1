'use client';

import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import '@/styles/navbar.css';

const menuItems = [
  'CRM', 'Utilities', 'Insurance', 'Assets', 'Mutual',
  'Research', 'Transact Online', 'Goal GPS',
  'Financial Planning', 'Wealth Report', 'Other'
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
   <nav className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
  <div className="menu-items">
    {menuItems.map((item) => (
      <button key={item} className="menu-button">
        {item}
      </button>
    ))}
  </div>

  <div className="nav-controls">
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
    <button className="logout-button">
      <FiLogOut size={16} />
      <span>Logout</span>
    </button>
  </div>
</nav>
  );
}