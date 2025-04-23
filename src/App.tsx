import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import { Task } from "./types/Task";
import logo from "/todo_logo.png";
import {FilterType} from "./components/Filter";

function App() {
  // State to store the list of tasks. Initial value comes from localStorage or empty array
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  // State to store the current filter ('all', 'pending', or 'completed'). Initial value is 'all'.
  const [filter, setFilter] = useState<FilterType>('all');

  // useEffect to save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task to the list.
  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      status: "pending",
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the status of a task (pending/completed).
  const handleToggleStatus = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          };
        }
        return task;
      })
    );
  };

  // Function to remove a task from the list.
  const handleRemoveTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    // Filters the tasks based on the current filter state
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div className="mx-auto p-4 max-w-md w-full">
      <img
        src={logo}
        className="w-24 h-24 mx-auto mb-4"
        alt="To Do List Logo"
      />
      <h1 className="text-3xl font-bold mb-8 text-center">To Do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <Filter filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleStatus={handleToggleStatus}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  );
}

export default App;