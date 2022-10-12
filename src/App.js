import { useState ,useEffect} from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';

function App() {
  
  const [tasksItems,setTaskItems]=useState([])
  const [showCompleted,setShowCompleted]=useState(false)

  function createNewTask(taskName){
    if (!tasksItems.find(task=>task.name===taskName)) {
      setTaskItems([...tasksItems,{name:taskName,done:false}])
    }  
  }

  const toggleTask=(task)=>{
    setTaskItems(tasksItems.map((t)=>(t.name===task.name?{...t,done:!t.done}:t)))
  }

  useEffect(()=>{
    let data=localStorage.getItem("tasks")
    if(data){
      setTaskItems(JSON.parse(data))
    }
  },[])

  const cleanTask=()=>{
    setTaskItems(tasksItems.filter(task=>!task.done))
    setShowCompleted(false)
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasksItems))
  },[tasksItems])

  const mainStyle="bg-dark bg-gradient vh-100 text-white"

  return (
    <main className={mainStyle}>
      <Container>
        <TaskCreator createNewTask={createNewTask}/>
          <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
          <VisibilityControl isChecked={showCompleted} cleanTask={cleanTask} setShowCompleted={(checked)=>setShowCompleted(checked)}/>
          {showCompleted &&(
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
          )}  
      </Container>      
    </main>
  );
}

export default App;
