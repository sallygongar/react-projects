import { useState } from "react";
import MascotaTable from "./MascotaTable";
import RegistroMascotas from "./RegistroMascotas";
import type { Mascota } from "../types/mascota.interface";
//import { toast, ToastContainer } from 'react-toastify';

const PageMain = () => {
  const [mascotas,setMascotas] = useState<Mascota[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false);

  const newMascota = (mascota: Mascota) => {
    setMascotas((prev) => [...prev, mascota])
    setTimeout(() =>{
      setOpenModal(false) 
    },4000)   
  }


  return(
    <div className="page_main">
      <h2>Listado de mascotas</h2>
      <div className="page_main_action">
        <button className="button_add" onClick={() => setOpenModal(true)}>Registrar mascotas</button>
      </div>
     { mascotas.length > 0 ? <MascotaTable data={mascotas}/> : <h3>Aún no hay mascotas registradas</h3>}
      {
        openModal && (
          <RegistroMascotas onClose={() => setOpenModal(false)} onSave={newMascota}/>
        )
      }
       {/* Contenedor de notificaciones */}
      {/*<ToastContainer position="top-right" autoClose={5000} />*/}
    </div>
  )
}

export default PageMain;