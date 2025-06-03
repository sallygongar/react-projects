import { useState, type ChangeEvent } from "react";
import type { Mascota } from "../types/mascota.interface";
import avatarMascotas from  '../assets/images/huella.png';


const RegistroMascotas = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [mascota,setMascota] = useState<Mascota>({
    mascota: "",
    especie: "",
    raza: "",
    sexo: "",
    fechaNacimiento: "",
    color: "",
    esterilizado: ""
  });

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
    console.log("Data mascota:", mascota)
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
          </div>
            <div className="form_group">
            <label htmlFor="especie">Especie</label>
            <input type="text" name="especie" id="especie" value={mascota.especie} onChange={handleInputChange}/>
          </div>
          <div className="form_group">
            <label htmlFor="raza">Raza</label>
            <input type="text" name="raza" id="raza" value={mascota.raza} onChange={handleInputChange}/>
          </div>
          <div className="form_group">
            <label htmlFor="sexo">Sexo</label>
            <select name="sexo" id="sexo" value={mascota.sexo} onChange={handleInputChange}>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>
          <div className="form_group">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento" value={mascota.fechaNacimiento} onChange={handleInputChange}/>
          </div>
          <div className="form_group">
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color" value={mascota.color} onChange={handleInputChange}/>
          </div>
          <div className="form_group">
            <label htmlFor="esterilizado">Esterilizado</label>
            <input type="text" name="esterilizado" id="esterilizado" value={mascota.esterilizado} onChange={handleInputChange}/>
          </div>
          <div className="form_group_action">
            <button type="button" className="button_save" onClick={handleSave}>Guardar</button>
          </div>
      </form>
    </div>
  )
}

export default RegistroMascotas;