import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  /**
  Callback function to toggle the status of a task.
  @param id The ID of the task to toggle.
  */
  onToggleStatus: (id: string) => void;
  /**
  Callback function to remove a task.
  @param id The ID of the task to remove.
  */
  onRemoveTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleStatus, onRemoveTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg my-4">
        <p className="text-gray-600 text-lg font-medium">No tasks found</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {tasks.map((task) => {
          const isCompleted = task.status === 'completed';
          return (
            <div key={task.id} className="mb-2">
              <div className={`transition-all duration-300 ease-in-out p-4 rounded-md shadow-md flex justify-between items-center ${isCompleted ? 'bg-gray-100' : 'bg-white'}`}>

                <div className="flex items-center w-full">
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onToggleStatus(task.id)}
                    className="mr-4 transition-all duration-300 ease-in-out"
                  />
                  {/* Conditional styling: Apply line-through and text-gray-500 if the task is completed */}
                  <span className={`transition-all duration-300 ease-in-out break-words ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                  </span>

              </div>

                <button
                  onClick={() => onRemoveTask(task.id)}
                  className="transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-700 text-white font-bold rounded text-sm px-3 py-1"
                >
                  Remove
                </button>
              </div>

        </div>
      )})}
    </div>
  );
};

export default TaskList;