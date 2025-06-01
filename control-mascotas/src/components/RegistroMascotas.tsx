import { useState, type ChangeEvent } from "react";

import avatarMascotas from  '../assets/images/huella.png';


const RegistroMascotas = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleImagenChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };
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
            className="form_input-avatar"
            onChange={handleImagenChange}  
          />
        </div>
        <div className="form_group">
          <label htmlFor="mascota">Nombre de la mascota</label>
          <input type="text" name="mascota" id="mascota"/>
        </div>
          <div className="form_group">
          <label htmlFor="especie">Especie</label>
          <input type="text" name="especie" id="especie"/>
        </div>
        <div className="form_group">
          <label htmlFor="raza">Raza</label>
          <input type="text" name="raza" id="raza"/>
        </div>
        <div className="form_group">
          <label htmlFor="sexo">Sexo</label>
          <select name="sexo" id="sexo">
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>
        <div className="form_group">
          <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
          <input type="date" name="fecha_nacimiento" id="fecha_nacimiento"/>
        </div>
        <div className="form_group">
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color"/>
        </div>
        <div className="form_group">
          <label htmlFor="esterilizado">Esterilizado</label>
          <input type="text" name="esterilizado" id="esterilizado"/>
        </div>
    </form>
    </div>
  )
}

export default RegistroMascotas;