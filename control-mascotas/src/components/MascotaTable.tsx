
import type { Mascota } from "../types/mascota.interface"

type Props = {
  data: Mascota[]; // 👈 aquí defines que esperas una prop llamada "data"
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const MascotaTable: React.FC<Props> = ({data, onEdit, onDelete}) => {
  
  return(
    <div className="content_mascotas">
      <div className="table_mascotas">
        <div className="row_mascota_header">
          <span>Nombre</span>
          <span>Nacimiento</span>
          <span>Especie</span>
          <span>Raza</span>
          <span>Sexo</span>
          <span>Color</span>
          <span>Acciones</span>
        </div>
        {
          data.map((mascota, key) =>(
            <div key={key} className="row_mascota">
              <span>{mascota.mascota}</span>
              <span>{mascota.fechaNacimiento}</span>
              <span>{mascota.especie}</span>
              <span>{mascota.raza}</span>
              <span>{mascota.sexo}</span>
              <span>{mascota.color}</span>
              <span className="item_actions">
                <button
                  title="Editar"
                  onClick={() => onEdit(key)}
                 >
                ✏️
                </button>
                 <button
                  title="Eliminar"
                  onClick={() => onDelete(key)}
                 >
                🗑️
                </button>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MascotaTable;