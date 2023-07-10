import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  useEffect(() => {
    setTask({ title: "", description: "" });
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
  const modifyTask = (taskId, data) => {
    setTask(data);
  };
  const updateTask = (task) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.task_id) {
          item.title = task.title
          item.description = task.description
        }
        return item
      })
    );
    setTask({id: undefined});
  };
  return (
    <TaskContext.Provider
      value={{ tasks, task, deleteTask, createTask, modifyTask, updateTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
