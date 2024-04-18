import React, { useState } from 'react'
import Button from '../Button'
import css from "./Task6.module.css"

const Task6 = () => {

    const [info, setInfo] = useState("HOME")

  return (
    <div>
     <button className={css.button} onClick={() => setInfo("HOME")} >HOME</button>
     <button className={css.button} onClick={() => setInfo("ABOUT")} >ABOUT</button>
     <button className={css.button} onClick={() => setInfo("CONTACT")} >CONTACT</button>

<h1>{info}</h1>
    </div>
  )
}

export default Task6