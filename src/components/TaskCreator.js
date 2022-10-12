import { useState } from 'react';

export const TaskCreator=({createNewTask})=>{
    const[taskName,setTaskName]=useState("")

    const handleSubmit=(e)=>{
    e.preventDefault()
    createNewTask(taskName)
    setTaskName("")
  }

    const formStyle="my-2 row"
    const divInputStyle="col-9"
    const inputStyle="form-control"
    const buttonStyle="btn btn-success btn-sm fs-6"
    const divButtonStyle="col-3"

    return(
        <form className={formStyle} onSubmit={handleSubmit}>
            <div className={divInputStyle}>
                <input className={inputStyle} value={taskName} type="text" placeholder="Type a new task" onChange={(e)=>setTaskName(e.target.value)}/>
            </div>
            <div className={divButtonStyle}>
                <button className={buttonStyle}>Create</button>
            </div>
        </form>
    )
}