import { useState } from 'react';
import { Habit } from './types';
import Header from './components/Header';
import Calendar from './components/Calendar';
import HabitsPanel from './components/HabitsPanel';
import AddHabitModal from './components/AddHabitModal';
import { useHabits } from './hooks/useHabits';
import './App.css';

function App() {
  const { habits, addHabit, deleteHabit, toggleHabitCompletion, clearAllHabits } = useHabits();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleAddHabit = (habitData: Omit<Habit, 'id' | 'completedDays'>) => {
    addHabit(habitData);
    setIsModalOpen(false);
  };

  const handleDeleteHabit = (habitId: number) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      deleteHabit(habitId);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all habits? This action cannot be undone.')) {
      clearAllHabits();
    }
  };

  return (
    <div className="app">
      <Header 
        onAddHabit={() => setIsModalOpen(true)}
        onClearAll={handleClearAll}
      />
      
      <div className="app-content">
        <Calendar
          currentDate={currentDate}
          selectedDate={selectedDate}
          habits={habits}
          onDateChange={setCurrentDate}
          onDateSelect={setSelectedDate}
          onToggleHabit={toggleHabitCompletion}
        />
        
        <HabitsPanel
          habits={habits}
          onDeleteHabit={handleDeleteHabit}
        />
      </div>

      {isModalOpen && (
        <AddHabitModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddHabit}
        />
      )}
    </div>
  );
}

export default App;
