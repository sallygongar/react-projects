import { useState } from 'react';
import '../assets/css/styles.css';

import iconDelete from  '../assets/images/trash.png';

interface ITask{
  description: string,
  done: boolean
}

const ToDoList = () =>{
  const [task,setTask] = useState("");
  const [listTask,setlistTask] = useState<ITask[]>([]);

  const handleNewTask = () => {
    if(!task) return;
    setlistTask([...listTask,{ description: task, done: false }])
    setTask('')
  }

  
  return(
    <div>
      <h1>Lista de Tareas </h1>
      <div>
        <div>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <button type="button" onClick={handleNewTask}>Agregar</button>
        </div>
        <section>
          {
            listTask.length > 0 && listTask.map((item, index) => {
              return(
              <div key={index}>
                <input type="checkbox" id="done" name="done" checked={item.done} />
                <label>{item.description}</label>
                <img src={iconDelete} alt='eliminar'/>
              </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default ToDoList