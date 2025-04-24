// Task type definition
export type Task = {
  id: string;
  title: string;
  status: 'pending' | 'completed';
};

// Filter type definition
export type FilterType = 'all' | 'pending' | 'completed';

// Filter component props
export interface FilterProps {
  filter: FilterType;
  onFilterChange: React.Dispatch<React.SetStateAction<FilterType>>;
}

// TaskList component props
export interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

// AddTask component props
export interface AddTaskProps {
  onAddTask: (title: string) => void;
}
