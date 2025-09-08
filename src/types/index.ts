export interface Habit {
  id: number;
  name: string;
  color: string;
  completedDays: string[];
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export interface HabitStats {
  completionRate: number;
  completedCount: number;
  totalDays: number;
}

