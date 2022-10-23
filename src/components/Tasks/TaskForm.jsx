import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-400 p-5 rounded-sm">
        <input
          type="text"
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="p-1 text-2xl mb-2 w-full rounded-sm"
        />
        <textarea
          placeholder="Task description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="p-1 text-2xl w-full rounded-sm"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 rounded-md hover:bg-indigo-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
