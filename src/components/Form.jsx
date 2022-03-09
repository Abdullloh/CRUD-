import React from 'react'

export default function Form(props) {
    const {open,no} = props
  return (
    <div style={open ? {display:'block'}:{display:'none'}}>
        <span onClick={()=> no(!open)}>x</span>
        <form action="">
            <input type="text" />    
        </form>
    </div>
  )
}
