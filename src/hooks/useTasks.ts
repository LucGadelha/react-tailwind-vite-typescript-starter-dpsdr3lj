import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types';
import { STORAGE_KEYS } from '../constants/storage';

export const useTasks = () => {
  // State to store the list of tasks. Initial value comes from localStorage or empty array
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEYS.TASKS);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = useCallback((title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      status: "pending",
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, []);

  // Toggle task status
  const toggleTaskStatus = useCallback((id: string) => {
    setTasks(prevTasks =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          };
        }
        return task;
      })
    );
  }, []);

  // Remove a task
  const removeTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter((task) => task.id !== id));
  }, []);

  return {
    tasks,
    addTask,
    toggleTaskStatus,
    removeTask
  };
};
