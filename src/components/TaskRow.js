export const TaskRow=({task,toggleTask})=>{
    console.log("tarea ",task.name)
    return(
        <tr>
            <td className="d-flex justify-content-between">{task.name} &nbsp;
                <input type="checkbox" checked={task.done} onChange={()=>toggleTask(task)}/>
            </td>
        </tr>
    )
}