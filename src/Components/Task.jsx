import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Task.css'
import Moment from 'moment'
const Task = ({task, onDelete, setReminder, onClickId}) => {
  const main = document.getElementById('main')
  const formatDate = Moment(task.Day).format('MMM Do')
  const Date = `${formatDate} at ${task.time}`
  
  return (
  <div id='main' className={onClickId.includes(task.id) ? 'delete' : 'normal'} style={{ borderLeft:`${ task.reminder ? '3px solid red':'' }`}} onDoubleClick={()=>setReminder(task.id)}>
        <h3 style={{display:'flex', justifyContent:'space-between',margin:'5px 0'}}>{task.text} <FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)} /></h3>
        <p style={{margin:'0px 0'}}>{Date}</p>
    </div>
  )
}

export default Task