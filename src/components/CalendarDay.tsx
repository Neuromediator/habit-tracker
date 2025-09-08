import React from 'react';
import { Habit } from '../types';
import './CalendarDay.css';

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  habits: Habit[];
  onToggleHabit: (habitId: number, date: Date) => void;
  onClick: () => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  isCurrentMonth,
  isToday,
  isSelected,
  habits,
  onToggleHabit,
  onClick
}) => {
  const isHabitCompleted = (habitId: number) => {
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return false;
    
    const dateStr = date.toISOString().split('T')[0];
    return habit.completedDays.includes(dateStr);
  };

  const handleHabitClick = (e: React.MouseEvent, habitId: number) => {
    e.stopPropagation();
    onToggleHabit(habitId, date);
  };

  const dayClasses = [
    'calendar-day',
    !isCurrentMonth && 'other-month',
    isToday && 'today',
    isSelected && 'selected'
  ].filter(Boolean).join(' ');

  return (
    <div className={dayClasses} onClick={onClick}>
      <div className="day-number">
        {date.getDate()}
      </div>
      
      {isCurrentMonth && habits.length > 0 && (
        <div className="habits-indicators">
          {habits.map(habit => (
            <div
              key={habit.id}
              className={`habit-indicator ${isHabitCompleted(habit.id) ? 'completed' : 'not-completed'}`}
              style={{ backgroundColor: habit.color }}
              onClick={(e) => handleHabitClick(e, habit.id)}
              title={`${habit.name} - ${isHabitCompleted(habit.id) ? 'Completed' : 'Not completed'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarDay;

