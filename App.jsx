import { useState, useEffect } from "react"
import TaskInput from "./taskInput";
import TaskList from "./taskList"
import LoginData from "./LogInData";
import DataAPI from "./DataAPI";

function App() {

  // All of the tasks in the list
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))
    return savedTasks || []
  });

  // Current task in the input box
  const [newTask, setNewTask] = useState("");

  // when tasks[] is updated, the function runs
  // the function saves tasks[] to localStorage under the key "tasks"
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function handleChange(e) {
    setNewTask(e.target.value)
  }

  function handleSubmit() {
    // if newTask is blank, return; END
    if (newTask.trim() == "") {
      return;
    }

    // newTask is not blank
    setTasks([...tasks, newTask]) // VERY VERY VERY IMPORTANT / useEffect RUN!
    setNewTask("")
  }

  return (
    <>
      <h1>Todo list</h1>
      <div id= "flex-container">
      
  
     
        <TaskInput handleSubmit = {handleSubmit} />
        <TaskList task={tasks} />
        <input type="text" value={newTask} className="input input-bordered w-full max-w-xs" onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleSubmit}>Add Task</button>
        <LoginData />
        <DataAPI />
      </div>

      <ul>

      
      
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </>
  )
}


export default App