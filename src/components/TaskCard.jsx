import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, modifyTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <div className="flex justify-evenly">
        <button
          className="bg-blue-900 p-2 rounded-md mt-4 py-1 hover:bg-blue-700"
          onClick={() => {
            modifyTask(task.id, task);
          }}
        >
          Update
        </button>
        <button
          className="bg-red-600 p-2 rounded-md py-1 mt-4 hover:bg-red-400"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
