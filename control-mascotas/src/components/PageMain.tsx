import { useEffect, useState } from "react";
import MascotaTable from "./MascotaTable";
import RegistroMascotas from "./RegistroMascotas";
import type { Mascota } from "../types/mascota.interface";
//import { toast, ToastContainer } from 'react-toastify';

const LOCAL_STORAGE_KEY = 'mascotas';

const PageMain = () => {
  const [mascotas,setMascotas] = useState<Mascota[]>(() =>{
    try{
      const mascotaData = localStorage.getItem(LOCAL_STORAGE_KEY);
      return mascotaData ? JSON.parse(mascotaData) : []
    }catch{
      return []
    }
  })
  
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(()=>{
    // Cargar información del local storage
    const mascotasData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(mascotasData){
      setMascotas(JSON.parse(mascotasData))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mascotas))
  },[mascotas])

  const newMascota = (mascota: Mascota) => {
    setMascotas((prev) => [...prev, mascota])
    setTimeout(() =>{
      setOpenModal(false) 
    },4000)   
  }

  const editMascota = (id: number) => {
    console.log("Item a Editar:", id)
  }

  const deleteMascota = (id: number) => {
    console.log("Item a Eliminar:", id)
  }

  return(
    <div className="page_main">
      <h2>Listado de mascotas</h2>
      <div className="page_main_action">
        <button className="button_add" onClick={() => setOpenModal(true)}>Registrar mascotas</button>
      </div>
     { mascotas.length > 0 ? <MascotaTable data={mascotas} onEdit={editMascota} onDelete={deleteMascota}/> : <h3>Aún no hay mascotas registradas</h3>}
      {
        openModal && (
          <RegistroMascotas onClose={() => setOpenModal(false)} onSave={newMascota} />
        )
      }
       {/* Contenedor de notificaciones */}
      {/*<ToastContainer position="top-right" autoClose={5000} />*/}
    </div>
  )
}

export default PageMain;