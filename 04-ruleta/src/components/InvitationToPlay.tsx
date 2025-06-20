import { useRoulette } from "../context/roulette/rouletteHook";
import CustomCheckbox from "./CustomCheckbox";

const InvitationToPlay = () =>{
  const { playRoulette, isSpinning, onChangeTyC, acceptedTerm } = useRoulette();
    return(
      <div className="ruleta_invitation">
        <div className="ruleta_invitation_description">
          <h3>¡Gira y encuentra tu ahorro!</h3>
          <p>Juega nuestra ruleta de descuentos y descubre cuanto puedes ahorrar en tus compras</p>
          <CustomCheckbox label="Acepto los terminos y condiciones" checked={acceptedTerm} onChange={onChangeTyC}/>
        </div>
        <button type="button" className={`ruleta_play ${isSpinning ? 'ruleta_play_disabled' : ''}`} onClick={playRoulette} disabled={isSpinning}>Jugar</button>
      </div>
    )
}

export default InvitationToPlay