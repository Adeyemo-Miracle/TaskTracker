import { useState } from "react"
import Task from './Task'

const Tasks = ({tasks, onDelete, setReminder, onClickId}) => {
  const main = document.getElementById('main')
  console.log(tasks.map((x)=> x) )
  return (
    <div id='main'>
    {tasks.map((ask)=>(<Task key={ask.id} task={ask} onDelete={onDelete} setReminder={setReminder} onClickId={onClickId}/>
    ))}
    </div>
  )
}

export default Tasks