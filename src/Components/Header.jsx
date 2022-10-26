import React from 'react'
import Button from './Button'
import './Header.css'
// import Task from './Task'
import { useLocation } from 'react-router-dom'

const Header = ({title, toggleForm, toggle}) => {
  const location = useLocation() 
  return (
    <header className='headerstyle' >
      <h1>{title}</h1>
      {location.pathname == '/' && <Button color={toggle ? 'red':'green'} value={toggle ? 'Close':'Add'} onClick={toggleForm}/>}
    </header>

  )
}
// //  <-------- default props ------------>
Header.defaultProps = {
  title: 'Task Tracker',
}
export default Header