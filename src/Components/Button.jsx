import React from 'react'
import './Button.css'

const Button = ({color, value, onClick}) => {
  // console.log({color})
  return (
    <button style={{backgroundColor: color}} className='btn' onClick={onClick}>{value}</button>
  )
}

export default Button