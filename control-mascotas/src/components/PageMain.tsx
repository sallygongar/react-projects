import { useEffect, useState } from "react";
import MascotaTable from "./MascotaTable";
import RegistroMascotas from "./RegistroMascotas";
import type { Mascota } from "../types/mascota.interface";
import { toast, ToastContainer } from 'react-toastify';

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
  const [mascotaEdit, setMascotaEdit] = useState<Mascota | undefined | null>(null)
  const [editIndex,setEditIndex] = useState<number | null>(null);
  const [mode,setMode] = useState<string>('NEW');

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
    if(mode=="EDIT" && editIndex!=null){
      setMascotas(prev => {
      const mascotaCopy = [...prev]
      mascotaCopy[editIndex] = mascota;
        return mascotaCopy
      })
      toast.success('Mascota actualizada con éxito!');
    }else{
      setMascotas((prev) => [...prev, mascota])
      toast.success('Mascota guardada con éxito!');
    }
    setMascotaEdit(null)
    setMode('NEW')
    setTimeout(() =>{
      setOpenModal(false) 
    },3000)   
  }

  const editMascota = (id: number) => {
    const mascotaEdit = mascotas.filter((_, i) => i == id);
    setEditIndex(id)
    if(mascotaEdit.length > 0){
      setMascotaEdit(mascotaEdit[0])
      setOpenModal(true)
      setMode('EDIT')
    }
  }

  const deleteMascota = (id: number) => {
    const newMascotas = mascotas.filter((_, i) => i !== id);
    setMascotas(newMascotas);
    toast.error('La información se ha eliminado!');
    setMascotaEdit(null)
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
          <RegistroMascotas onClose={() => setOpenModal(false)} onSave={newMascota} mascotaEdit={mascotaEdit} />
        )
      }
       {/* Contenedor de notificaciones */}
      {<ToastContainer position="top-right" autoClose={2000} />}
    </div>
  )
}

export default PageMain;