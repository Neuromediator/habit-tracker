# Habit Tracker Calendar

A beautiful and modern habit tracking application built with React, TypeScript, and Vite. Track your daily habits with an intuitive calendar interface.

## Features

- 📅 **Calendar View**: Visual calendar showing all days of the month
- 🎯 **Habit Tracking**: Click on habit indicators to mark them as complete/incomplete
- 🎨 **Color-coded Habits**: Each habit has its own color for easy identification
- 📊 **Progress Statistics**: View completion rates and streak counts
- 💾 **Local Storage**: Your habits are automatically saved locally
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and builds

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Use

1. **Add a Habit**: Click the "Add Habit" button to create a new habit
2. **Choose a Color**: Select a color for your habit to make it easily identifiable
3. **Track Daily**: Click on the colored dots in the calendar to mark habits as complete
4. **View Progress**: Check the habits panel to see your completion rates
5. **Navigate Months**: Use the arrow buttons to move between months
6. **Delete Habits**: Click the trash icon to remove habits you no longer want to track

## Technology Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icons
- **CSS3**: Modern styling with gradients and animations
- **Local Storage**: Data persistence

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # App header with controls
│   ├── Calendar.tsx    # Main calendar component
│   ├── CalendarDay.tsx # Individual day component
│   ├── HabitsPanel.tsx # Habits list and stats
│   └── AddHabitModal.tsx # Modal for adding habits
├── hooks/
│   └── useHabits.ts    # Custom hook for habit management
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main app component
├── App.css             # App-specific styles
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Features in Detail

### Calendar Interface
- Shows current month with navigation
- Highlights today's date
- Displays habit completion status with colored dots
- Responsive grid layout

### Habit Management
- Add habits with custom names and colors
- Delete habits with confirmation
- Track completion status for each day
- View monthly completion statistics

### Data Persistence
- All data is automatically saved to browser's local storage
- No server required - everything works offline
- Data persists between browser sessions

## Browser Support

This application works in all modern browsers that support:
- ES2020 features
- CSS Grid and Flexbox
- Local Storage API

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License.

