import { useState, useContext, useEffect } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const { createTask, task, updateTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  useEffect(() => {
    if (task.id !== undefined) {
      setTitle(task.title);
      setdescription(task.description);
    }
  }, [task.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id === undefined) {
      createTask({ title, description });
    } else {
      let task_id = task.id;
      updateTask({ task_id, title, description });
    }

    setTitle("");
    setdescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form
        className="p-10 mb-4 bg-slate-800 rounded-md shadow-sm"
        action=""
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-2">
          {task.id !== undefined ? "Editar tarea "+(task.id +1) : "Crear Tarea"}
        </h1>
        <input
          className="bg-slate-300 p-2 w-full mb-2"
          type="text"
          placeholder="escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <input
          className="bg-slate-300 p-2 w-full mb-2"
          type="text"
          placeholder="description"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          value={description}
        />
        <button className="bg-indigo-500 p-3 py-1 my-2 mx-auto text-white rounded-md shadow-md">
          guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
