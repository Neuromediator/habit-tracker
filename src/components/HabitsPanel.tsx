import React from 'react';
import { Trash2, TrendingUp, CheckCircle } from 'lucide-react';
import { Habit } from '../types';
import './HabitsPanel.css';

interface HabitsPanelProps {
  habits: Habit[];
  onDeleteHabit: (habitId: number) => void;
}

const HabitsPanel: React.FC<HabitsPanelProps> = ({ habits, onDeleteHabit }) => {
  const getHabitStats = (habit: Habit) => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    
    let completedCount = 0;
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      if (date <= today) {
        const dateStr = date.toISOString().split('T')[0];
        if (habit.completedDays.includes(dateStr)) {
          completedCount++;
        }
      }
    }

    const completionRate = Math.round((completedCount / daysInMonth) * 100);
    return { completionRate, completedCount, totalDays: daysInMonth };
  };

  if (habits.length === 0) {
    return (
      <div className="habits-panel">
        <h3>Your Habits</h3>
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <p>No habits yet. Click "Add Habit" to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="habits-panel">
      <h3>Your Habits</h3>
      <div className="habits-list">
        {habits.map(habit => {
          const stats = getHabitStats(habit);
          return (
            <div key={habit.id} className="habit-item" style={{ borderLeftColor: habit.color }}>
              <div className="habit-info">
                <div className="habit-color" style={{ backgroundColor: habit.color }}></div>
                <div className="habit-name">{habit.name}</div>
              </div>
              <div className="habit-stats">
                <span className="stat-item">
                  <TrendingUp size={16} />
                  {stats.completionRate}%
                </span>
                <span className="stat-item">
                  <CheckCircle size={16} />
                  {stats.completedCount} days
                </span>
                <button 
                  className="delete-habit"
                  onClick={() => onDeleteHabit(habit.id)}
                  title="Delete habit"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HabitsPanel;
