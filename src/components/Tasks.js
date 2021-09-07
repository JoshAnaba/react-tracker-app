import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  )
}

// we cant do something like tasks.push to state bc state is immutable, setTasks function does the change
// for global state access , we can use the context api or redux
export default Tasks
