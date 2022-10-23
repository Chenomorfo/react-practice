import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'

function TaskList() {

  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <div className='text-center text-5xl font-bold text-white mt-4'>No tasks</div>;
  }

  return (
    <div className='grid grid-cols-4'>
      {tasks.map((task) => (
        <TaskCard  key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
