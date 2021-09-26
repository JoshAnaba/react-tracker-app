
import { useState, useEffect } from 'react'
// useEffect runs when the page loads

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
    // array to set useEffect to run when the value in it changes; @tm theres no value, so it is left empty ; usually called dependency
  }, [])

  
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`,
    {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await  res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle task reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }
    const res = await fetch(`https://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task))
  }
  return (
    <Router>
    <div className="main-ctn">
      <Header onShowAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <Route path="/" exact render={(props)=>(
        <>
         {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
        </>
      )}/>
      <Route path="/about" component={About}/>
      <Footer />
    </div>
    </Router>
  );
}

// class App extends React.Component {
//   render () {
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;
