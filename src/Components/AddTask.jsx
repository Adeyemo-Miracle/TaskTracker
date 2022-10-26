import React from 'react'
import {useState} from 'react'
import './AddTask.css'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [Day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
            
function onSubmit(y) {
    y.preventDefault()

    if (!text || !Day){
        alert('Please Set your Task Tracker')
        return
    }

    onAdd({text, Day, time, reminder})
    setTime('')
    setText('')
    setDay('')
    setReminder(false)
}
  return (
    <form onSubmit={onSubmit} >
        <div >
            <label htmlFor="">Task</label>
            <input type="text" placeholder='Add Task' name='TaskText' value={text} onChange={(x)=>setText(x.target.value)}/>
        </div>
        <div >
            <label htmlFor="">Day</label>
            <input type="date" placeholder='Add Day' name='TaskDay' value={Day} onChange={(x)=>setDay(x.target.value)} />
        </div>
        <div >
            <label htmlFor="">Time</label>
            <input type="time" placeholder='Add Time' name='TaskTime' value={time} onChange={(x)=>setTime(x.target.value)} />
        </div>
        <div >
            <label htmlFor="">Set Reminder</label>
            <input className='checkbox' type="checkbox" name='TaskReminder' checked={reminder} value={reminder} onChange={(x)=>setReminder(x.currentTarget.checked)} />
        </div>
        <input className='input' type="submit" value='Save Task'/>
    </form>
  )
}

export default AddTask