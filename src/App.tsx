import { useState } from "react";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import logo from "/todo_logo.png";
import { FilterType } from "./types";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask, toggleTaskStatus, removeTask } = useTasks();
  const [filter, setFilter] = useState<FilterType>('all');

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
      <AddTask onAddTask={addTask} />
      <Filter filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleStatus={toggleTaskStatus}
        onRemoveTask={removeTask}
      />
    </div>
  );
}

export default App;