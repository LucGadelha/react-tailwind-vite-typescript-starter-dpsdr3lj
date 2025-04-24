import React, { useState } from 'react';
import ErrorMessage from './shared/ErrorMessage';

interface AddTaskProps {
  // Callback function to add a new task.
  onAddTask: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  // State to manage the input value of the task title and error state
  const [inputValue, setInputValue] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (showError) setShowError(false);
  };

  /**
  Handles the addition of a new task.
  Trims the input value, checks if it's not empty, and then calls the onAddTask callback with the trimmed value.
  Shows error state if the input is empty.
  */
  const handleAddTask = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      onAddTask(trimmedValue);
      setInputValue('');
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {showError && (
        <ErrorMessage message="Field cannot be empty. Please enter a value." />
      )}
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={`border ${showError ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg shadow-md flex-grow transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 ${showError ? 'focus:ring-red-500' : 'focus:ring-blue-500'} placeholder-gray-400`}
          placeholder="Add a new task..."
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 ml-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;