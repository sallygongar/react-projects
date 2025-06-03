import { useState, type ChangeEvent } from "react";
import type { Mascota } from "../types/mascota.interface";
import avatarMascotas from  '../assets/images/huella.png';


const RegistroMascotas = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading,setLoading] = useState<boolean>(false);
  const [mascota,setMascota] = useState<Mascota>({
    mascota: "",
    especie: "",
    raza: "",
    sexo: "",
    fechaNacimiento: "",
    color: "",
    esterilizado: ""
  });

  const [errores, setErrores] = useState<Partial<Record<keyof typeof mascota, string>>>({});

  const handleImagenChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log("Name:", name)
    //console.log("Value:", value)
    setMascota({...mascota, [name]: value});
  }

  const handleSave = () => {
    setLoading(true)
    if(validateData()) return
   
    setTimeout(()=>{
      console.log("La información ha sido guardada exitosamente")
       setLoading(false)
    },5000)
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
    }

    setErrores(nuevosErrores)
    return isError

  }

  return(
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
            <input type="text" name="esterilizado" id="esterilizado" value={mascota.esterilizado} onChange={handleInputChange}/>
            <span className="message_error">{errores.esterilizado}</span>
          </div>
          <div className="form_group_action">
            <button type="button" className="button_save" onClick={handleSave}>{loading ? 'Guardando...' : 'Guardar'}</button>
          </div>
      </form>
    </div>
  )
}

export default RegistroMascotas;