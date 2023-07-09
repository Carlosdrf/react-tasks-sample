import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  const createTask = (task) => {
    setTasks([
      ...tasks,
      { title: task.title, description: task.description, id: tasks.length },
    ]);
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
