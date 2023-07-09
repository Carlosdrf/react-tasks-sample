import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) return <h1 className="text-white text-center font-bold text-4xl">no hay tareas yet</h1>;
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
