import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Habit } from '../types';
import CalendarDay from './CalendarDay';
import './Calendar.css';

interface CalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  habits: Habit[];
  onDateChange: (date: Date) => void;
  onDateSelect: (date: Date | null) => void;
  onToggleHabit: (habitId: number, date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  habits,
  onDateChange,
  onDateSelect,
  onToggleHabit
}) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    onDateChange(newDate);
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const date = new Date(year, month, i - startingDayOfWeek + 1);
      days.push(
        <CalendarDay
          key={`empty-${i}`}
          date={date}
          isCurrentMonth={false}
          isToday={false}
          isSelected={false}
          habits={habits}
          onToggleHabit={onToggleHabit}
          onClick={() => {}}
        />
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <CalendarDay
          key={day}
          date={date}
          isCurrentMonth={true}
          isToday={isToday}
          isSelected={isSelected}
          habits={habits}
          onToggleHabit={onToggleHabit}
          onClick={() => onDateSelect(isSelected ? null : date)}
        />
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-btn" onClick={() => navigateMonth('prev')}>
          <ChevronLeft size={20} />
        </button>
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button className="nav-btn" onClick={() => navigateMonth('next')}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;

