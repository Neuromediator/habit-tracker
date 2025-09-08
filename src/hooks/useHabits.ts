import { useState, useEffect } from 'react';
import { Habit } from '../types';

const STORAGE_KEY = 'habits';

export const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  // Load habits from localStorage on mount
  useEffect(() => {
    const savedHabits = localStorage.getItem(STORAGE_KEY);
    if (savedHabits) {
      try {
        setHabits(JSON.parse(savedHabits));
      } catch (error) {
        console.error('Error loading habits from localStorage:', error);
      }
    }
  }, []);

  // Save habits to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habitData: Omit<Habit, 'id' | 'completedDays'>) => {
    const newHabit: Habit = {
      id: Date.now(),
      name: habitData.name,
      color: habitData.color,
      completedDays: []
    };
    setHabits(prev => [...prev, newHabit]);
  };

  const deleteHabit = (habitId: number) => {
    setHabits(prev => prev.filter(habit => habit.id !== habitId));
  };

  const toggleHabitCompletion = (habitId: number, date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    setHabits(prev => 
      prev.map(habit => {
        if (habit.id === habitId) {
          const isCompleted = habit.completedDays.includes(dateStr);
          return {
            ...habit,
            completedDays: isCompleted
              ? habit.completedDays.filter(day => day !== dateStr)
              : [...habit.completedDays, dateStr]
          };
        }
        return habit;
      })
    );
  };

  const clearAllHabits = () => {
    setHabits([]);
  };

  return {
    habits,
    addHabit,
    deleteHabit,
    toggleHabitCompletion,
    clearAllHabits
  };
};
