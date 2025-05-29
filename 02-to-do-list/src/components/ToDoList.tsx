import { useEffect, useState } from 'react';
import CustomCheckbox from './CustomCheckbox';
import '../assets/css/styles.css';

import iconDelete from  '../assets/images/trash.png';
import type { ITask } from '../types/task'

const LOCAL_STORAGE_KEY = 'tasks';

const ToDoList = () =>{
  const [task,setTask] = useState("");
  const [listTask,setlistTask] = useState<ITask[]>(() =>{
    try{
      const taskData = localStorage.getItem(LOCAL_STORAGE_KEY);
      return taskData ? JSON.parse(taskData) : []
    }catch{
      return []
    }
  });

  useEffect(()=>{
    // Cargar información del local storage
    const taskData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(taskData){
      setlistTask(JSON.parse(taskData))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listTask))
  },[listTask])

  const handleNewTask = () => {
    if(!task.trim()) return;
    setlistTask([...listTask,{ description: task, done: false }])
    setTask('')
  }

  const handleRemoveTask = (index: number) => {
    //(_, i) → el primer parámetro (_) es el elemento actual (no lo usas, por eso se nombra con _).
    const newTasks = listTask.filter((_, i) => i !== index);
    setlistTask(newTasks);
  }

  const handleDoneTask = (checked: boolean, index: number) =>{
    //console.log(`checked: ${checked} , index: ${index} `)
    const newTasks = [...listTask];
    newTasks[index].done = checked;
    setlistTask(newTasks);
  }
  
  return(
    <div className='task_main'>
      <h1>Lista de Tareas </h1>
      <div className='task_content'>
        <div className='task_action'>
          <input 
            type="text" 
            placeholder='Escribe aqui...' 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            onKeyDown={ e => { if(e.key === 'Enter') handleNewTask()}}
            />
          <button type="button" onClick={handleNewTask}>Agregar</button>
        </div>
        <section className={`task_list ${listTask.length > 0 ? 'task_list-has-task' :''}`}>
          {
            listTask.length > 0 && listTask.map((item, index) => {
              return(
              <div key={index} className='task_item'>
                <CustomCheckbox
                  onChange={handleDoneTask}
                  checked={item.done}
                  index = {index}
                />
                <label style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.description}</label>
                <div className={`task_item-delete ${item.done ? 'task_item-delete-hidden': ''}`}>
                  <button type='button' onClick={() => handleRemoveTask(index)}><img src={iconDelete} alt='eliminar'/></button>
                </div>
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