import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onAddHabit: () => void;
  onClearAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddHabit, onClearAll }) => {
  return (
    <header className="header">
      <h1>
        <span className="header-icon">📅</span>
        Habit Tracker
      </h1>
      <div className="header-controls">
        <button className="btn btn-primary" onClick={onAddHabit}>
          <Plus size={20} />
          Add Habit
        </button>
        <button className="btn btn-secondary" onClick={onClearAll}>
          <Trash2 size={20} />
          Clear All
        </button>
      </div>
    </header>
  );
};

export default Header;

