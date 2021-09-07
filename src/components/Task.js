import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <div className="task-header" onDoubleClick={()=>onToggle(task.id)}>
        <h3>
          {task.task}
        </h3>
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=>onDelete(task.id)} />
      </div>
      <p>
        {task.day}
      </p>
    </div>
  )
}



export default Task
