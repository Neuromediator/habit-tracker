import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddHabitModal.css';

interface AddHabitModalProps {
  onClose: () => void;
  onSave: (habitData: { name: string; color: string }) => void;
}

const colorOptions = [
  '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
  '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'
];

const AddHabitModal: React.FC<AddHabitModalProps> = ({ onClose, onSave }) => {
  const [habitName, setHabitName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ff6b6b');

  const handleSave = () => {
    if (!habitName.trim()) {
      alert('Please enter a habit name');
      return;
    }

    onSave({
      name: habitName.trim(),
      color: selectedColor
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add New Habit</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="input-group">
            <label htmlFor="habitName">Habit Name</label>
            <input
              id="habitName"
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter habit name..."
              maxLength={30}
              autoFocus
            />
          </div>
          
          <div className="color-picker">
            <label>Choose Color</label>
            <div className="color-options">
              {colorOptions.map(color => (
                <button
                  key={color}
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save Habit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHabitModal;

