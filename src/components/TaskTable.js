import { TaskRow } from "./TaskRow"

export const TaskTable=({tasks,toggleTask,showCompleted=false})=>{
    const taskTableRows=(doneValue)=>{


        return(
            tasks.filter(task=>task.done===doneValue).map(task=>(
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            ))
        )
    }
    
    const tableStyle="table table-dark table-striped table-bordered border-secondary"

    return(
        <table className={tableStyle}>
        <thead>
          <tr>
            <th className="text-uppercase text-warning text-opacity-75">Tasks</th>
          </tr>
        </thead>
        <tbody>
            {
                taskTableRows(showCompleted)
            }
        </tbody>
      </table>
    )
}