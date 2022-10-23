import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 m-4 text-white p-3 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400">{task.description}</p>
      <button className="my-2 py-1 px-2 bg-red-600 rounded-md hover:bg-red-500"
       onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
  );
}

export default TaskCard;
