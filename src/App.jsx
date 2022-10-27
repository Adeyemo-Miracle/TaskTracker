import { useState, useEffect } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import './App.css'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'
import Task from './Components/Task'

// server = http://localhost:5000
function App() {
  const [toggleForm, setToggleForm]= useState(false)
  const [tasks, setTask]= useState([])
  const [onClickId, setOnClickId]=useState([])
  const ClassName = document.querySelector('.tasks')
useEffect(()=>{
  const getTasks = async() =>{
    const tasksfromserver = await FetchTasks()
    setTask(tasksfromserver)
    // console.log(tasksfromserver)
  }
  getTasks()
},[])
const FetchTasks = async() =>{
  const response = await fetch('https://adeyemotasksapi.herokuapp.com/tasks/')
  const responsejson = await response.json()
  return responsejson
}
const FetchTask = async(id) =>{
  const response = await fetch(`https://adeyemotasksapi.herokuapp.com/tasks/get/${id}`)
  const responsejson = await response.json()
  return responsejson
}
function saveTask (x){
  const AddTaskToServer = async() =>{
    const res = await fetch(`https://adeyemotasksapi.herokuapp.com/tasks/add/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(x)
    })
    const resjson = await res.json()
    console.log(resjson)
    setOnClickId([])
    setTask([...tasks, resjson])
  }
  AddTaskToServer()
  // const id = Math.floor(Math.random() * 10000)
  // const task = {id, ...x}
  // setTask([...tasks, task])
  // console.log(tasks)
}
function deleteTask(id,x){
  const delTaskFromServer = async() =>{
    await fetch(`https://adeyemotasksapi.herokuapp.com/tasks/delete/${id}`, {
      method: 'DELETE'
    })
  }
  delTaskFromServer()
 setTimeout((x)=>(setTask(tasks.filter((tf)=>tf.id !== id))), 1300)
  setOnClickId([...onClickId, id])
  // const values = [6,9,10,11,3,4]
  // console.log(values.includes(6))
  // console.log(values)
  // console.log(onClickId)
//  console.log(tasks.map((tf)=>tf.id == id ? tf : ''))
}
const setReminder = async(id)=>{
  const tasktotoggle = await FetchTask(id)
  const updTask = {...tasktotoggle, reminder : !tasktotoggle.reminder}
  // console.log(`${tasktotoggle.reminder} now ${!tasktotoggle.reminder}`)
  // console.log(updTask)
  const res = await fetch(`https://adeyemotasksapi.herokuapp.com/tasks/put/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const resjson= await res.json()
  setTask(tasks.map((x)=>x.id === id ? {...x, reminder: updTask.reminder}: x))
  // console.log(resjson)
}
  return (
    <Router basename={'/TaskTracker'}>
      <div className="App">
        <div className="tasktracker">
          <Header toggleForm={()=> setToggleForm(!toggleForm)} toggle={toggleForm} />
          <Routes >
          <Route path={`/`} exact element={(
            <>{<div className={toggleForm ? `anIn`:`anOut`} ><AddTask onAdd={saveTask } /></div>}
            <div className='tasks' >{tasks.length > 0 ? <Tasks tasks={tasks} onClickId={onClickId} onDelete={deleteTask} setReminder={setReminder}/> : <><center><p style={{fontSize: '15px'}}>No Tasks</p></center></>}</div>
            <center><Footer /></center></>
          ) }/>
          <Route path={`/about`} element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
