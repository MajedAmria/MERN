import React,{ useState ,useEffect } from 'react'

const ListForm = () => {
    const [task, setTasks] = useState("");
    const [toDo,setToDo]=useState([]);
    const [isDone,setisDone]=useState(false);
function handleSubmit(event) {
        event.preventDefault();
    
        setToDo([...toDo,task])
        clearState();
      console.log(...toDo);

    }
    const clearState=()=>{
        setTasks("")
    }

const toDelete=(e)=>{

    const idTask=e.target.id
    const allTasks=[...toDo]
    allTasks.splice(idTask,1)
    setToDo(allTasks)
    console.log(e.target.id);
    console.log(...allTasks);
    
   
    
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={e => setTasks(e.target.value)}/>
        <br/><br/>
        <button className="btn btn-primary">Add</button>
        </form>
        <br/><br/>
        {toDo.map((tasksTodo,idx)=>{
            return (
                <div key={idx} >
                    <label for="task" style={isDone? {textDecorationLine:'line-through'}:{}}> {tasksTodo} 
                    <input  name="task" type="checkbox" onChange={e=>setisDone(e.target.checked)} /></label>
                    <button id={idx} onClick={toDelete} style={{margin:15}} className="btn btn-dark">Delete</button>
                </div>)
         })} 
        </div>
  )
}

export default ListForm


