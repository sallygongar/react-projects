import { useRoulette } from "../context/roulette/rouletteHook";
import { useUser } from "../context/User/userHook";
import CustomCheckbox from "./CustomCheckbox";

const PanelToPlay = () =>{
  const { playRoulette, isSpinning } = useRoulette();
  const { acceptedTerm, onChangeTyC, onInputChange} = useUser();
    return(
      <div className="ruleta_panel">
        <div className="ruleta_panel_description">
          <h3>¡Gira y encuentra tu ahorro!</h3>
          <p>Juega nuestra ruleta de descuentos y descubre cuanto puedes ahorrar en tus compras</p>
          <input type="text" placeholder="Ingresa tu correo" onChange={onInputChange} name="email"/>
          <CustomCheckbox label="Acepto los terminos y condiciones" checked={acceptedTerm} onChange={onChangeTyC}/>
        </div>
        <button type="button" className={`ruleta_play ${isSpinning ? 'ruleta_play_disabled' : ''}`} onClick={() =>  playRoulette?.(acceptedTerm)} disabled={isSpinning}>Jugar</button>
      </div>
    )
}

export default PanelToPlay