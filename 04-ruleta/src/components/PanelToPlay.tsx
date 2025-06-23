import { useRoulette } from "../context/roulette/rouletteHook";
import { useUser } from "../context/User/userHook";
import { useForm } from "../context/Form/formHook";
import CustomCheckbox from "./CustomCheckbox";

const PanelToPlay = () =>{
  const { playRoulette,  isSpinning } = useRoulette();
  const { acceptedTerm, onChangeTyC} = useUser();
  const { onInputChange, inputs, onValidateForm } = useForm();


  const validateInformation = () => {
    if(onValidateForm?.(inputs, acceptedTerm)){
      playRoulette?.()
    }
  }

    return(
      <div className="ruleta_panel">
        <div className="ruleta_panel_description">
          <h3>¡Gira y encuentra tu ahorro!</h3>
          <p>Juega nuestra ruleta de descuentos y descubre cuanto puedes ahorrar en tus compras</p>
          <div className="ruleta_form_group">
            <input type="text" placeholder="Ingresa tu correo" value={inputs.email} onChange={onInputChange} name="email"/>
             <CustomCheckbox label="Acepto los terminos y condiciones" checked={acceptedTerm} onChange={onChangeTyC}/>
          </div>
        </div>
        <button type="button" className={`ruleta_play ${isSpinning ? 'ruleta_play_disabled' : ''}`} onClick={validateInformation} disabled={isSpinning}>Jugar</button>
      </div>
    )
}

export default PanelToPlay