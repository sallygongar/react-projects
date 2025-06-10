import { useState, type ChangeEvent } from "react";
import type { Mascota } from "../types/mascota.interface";
import avatarMascotas from  '../assets/images/huella.png';
import Spinner from './Spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IModalProps {
  onClose: () => void;
  onSave: (mascota: Mascota) => void;
  mascotaEdit?: Mascota | null | undefined;
}

const RegistroMascotas = ({ onClose, onSave, mascotaEdit }:IModalProps ) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading,setLoading] = useState<boolean>(false);
  const [mascota,setMascota] = useState<Mascota>(
    mascotaEdit ?? {
    mascota: "",
    especie: "",
    raza: "",
    sexo: "",
    fechaNacimiento: "",
    color: "",
    esterilizado: "",
    avatar: ""
  });


  const [errores, setErrores] = useState<Partial<Record<keyof typeof mascota, string>>>({});

  const handleImagenChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setMascota({...mascota, avatar: url})
      setAvatar(url);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setMascota({...mascota, [name]: value});
  }

  const handleSave = () => {
    setLoading(true)
    if(validateData()) return
   
    setTimeout(() => {
      /* Simulando en consumir API */
      setLoading(false)
      onSave(mascota)
      reset()
      toast.success('Mascota guardada con éxito!');
    },3000)
  }

  const validateData = () => {
    const nuevosErrores: Partial<Record<keyof typeof mascota, string>> = {};
    let isError = false;

    if(!mascota.mascota.trim()){
      nuevosErrores.mascota = "Ingrese nombre de la mascota";
      isError = true;
    } 

    if(!mascota.especie.trim()){
      nuevosErrores.especie = "Ingrese especie de la mascota";
      isError = true;
    }

    if(!mascota.raza.trim()){
      nuevosErrores.raza = "Ingrese raza de la mascota";
      isError = true;
    }

    if(!mascota.sexo.trim()){
      nuevosErrores.sexo = "Ingrese sexo de la mascota";
      isError = true;
    }

    if(!mascota.fechaNacimiento){
      nuevosErrores.fechaNacimiento = "Ingrese fecha de nacimiento de la mascota";
      isError = true;
    }

    if(!mascota.color){
      nuevosErrores.color = "Ingrese color de la mascota";
      isError = true;
    }

     if(!mascota.esterilizado){
      nuevosErrores.esterilizado = "Ingrese esterilizado de la mascota";
      isError = true;
    }

    /* Si hay error se cancela el loading */
    if(isError){
      setLoading(false)
      toast.error("Favor de verificar los campos")
    }

    setErrores(nuevosErrores)
    return isError
  }

  const reset = () => {
    setMascota({
      mascota: "",
      especie: "",
      raza: "",
      sexo: "",
      fechaNacimiento: "",
      color: "",
      esterilizado: "",
      avatar: ""
    })
  }

  return(
   <div className="modal_overlay">
      <div className="modal_content">
        <button className="modal-close" aria-label="Cerrar modal" onClick={onClose}>
          &times;
        </button>
        <div className="main">
          <h2>Registro de mascotas</h2>
            <form className="form_registro">
              <div className="form_group_file">
                <label htmlFor="foto" className='form_foto'>
                  {
                    avatar ? <img src={avatar} alt="vista previa" className="form_avatar"/>
                    :
                    <span className='form_prefoto'>
                      <img src={avatarMascotas}/>
                      Subir imagen
                    </span>
                  }
                </label>
                <input 
                  type="file" 
                  name="foto" 
                  id="foto"
                  accept="image/*"
                  className="form_input-avatar"
                  onChange={handleImagenChange}  
                />
              </div>
              <div className="form_group">
                <label htmlFor="mascota">Nombre de la mascota</label>
                <input type="text" name="mascota" id="mascota" value={mascota.mascota} onChange={handleInputChange}/>
                <span className="message_error">{errores.mascota}</span>
              </div>
                <div className="form_group">
                <label htmlFor="especie">Especie</label>
                <input type="text" name="especie" id="especie" value={mascota.especie} onChange={handleInputChange}/>
                <span className="message_error">{errores.especie}</span>
              </div>
              <div className="form_group">
                <label htmlFor="raza">Raza</label>
                <input type="text" name="raza" id="raza" value={mascota.raza} onChange={handleInputChange}/>
                <span className="message_error">{errores.raza}</span>
              </div>
              <div className="form_group">
                <label htmlFor="sexo">Sexo</label>
                <select name="sexo" id="sexo" value={mascota.sexo} onChange={handleInputChange}>
                  <option value="" disabled>Selecciona opcion</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
                <span className="message_error">{errores.sexo}</span>
              </div>
              <div className="form_group">
                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                <input type="date" name="fechaNacimiento" id="fechaNacimiento" value={mascota.fechaNacimiento} onChange={handleInputChange}/>
                <span className="message_error">{errores.fechaNacimiento}</span>
              </div>
              <div className="form_group">
                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="color" value={mascota.color} onChange={handleInputChange}/>
                <span className="message_error">{errores.color}</span>
              </div>
              <div className="form_group">
                <label htmlFor="esterilizado">Esterilizado</label>
                <select name="esterilizado" id="esterilizado" value={mascota.esterilizado} onChange={handleInputChange}>
                  <option value="" disabled>Selecciona opcion</option>
                  <option value="NO">NO</option>
                  <option value="SI">SI</option>
                </select>
                <span className="message_error">{errores.esterilizado}</span>
              </div>
              <div className="form_group_action">
                <button type="button" className="button_save" onClick={handleSave} disabled={loading}>{loading ? <Spinner/> : 'Guardar'}</button>
              </div>
          </form>
          {/* Contenedor de notificaciones */}
          <ToastContainer position="top-right" autoClose={2000} />
     
      </div>
    </div>
  </div>
  )
}

export default RegistroMascotas;