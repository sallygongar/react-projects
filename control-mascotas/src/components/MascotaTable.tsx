
import type { Mascota } from "../types/mascota.interface"

type Props = {
  data: Mascota[]; // 👈 aquí defines que esperas una prop llamada "data"
};

const MascotaTable: React.FC<Props> = ({data}) => {
  
  return(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Sexo</th>
          <th>Fecha de nacimiento</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
       {
          data.map((mascota, key) =>(
            <tr key={key}>
              <td>{mascota.mascota}</td>
              <td>{mascota.especie}</td>
              <td>{mascota.raza}</td>
              <td>{mascota.sexo}</td>
              <td>{mascota.fechaNacimiento}</td>
              <td>{mascota.color}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default MascotaTable;