import React, { useState } from 'react';

interface AddTaskProps {
  // Callback function to add a new task.
  onAddTask: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  // State to manage the input value of the task title.
  const [inputValue, setInputValue] = useState<string>(''); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  /**
  Handles the addition of a new task.
  Trims the input value, checks if it's not empty, and then calls the onAddTask callback with the trimmed value.
  */
  const handleAddTask = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      onAddTask(trimmedValue);
      setInputValue('');
    };
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 px-4 py-3 rounded-lg shadow-md flex-grow transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 ml-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;