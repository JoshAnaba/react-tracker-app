
import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // const name = 'Josh'
  // const bool = true
   const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1.30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Meeting at school',
        day: 'Feb 6th at 1.30pm',
        reminder: false
      },
      {
        id: 4,
        text: 'Meeting at school',
        day: 'Feb 6th at 1.30pm',
        reminder: true
      },
      {
        id: 5,
        text: 'Meeting at school',
        day: 'Feb 6th at 1.30pm',
        reminder: false
      },
    ]
  )

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle task reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="main-ctn">
      <Header />
      <AddTask />
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

// class App extends React.Component {
//   render () {
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;
