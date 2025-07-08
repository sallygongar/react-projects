import { useRoulette } from "../../context/roulette/rouletteHook";
import { useForm } from "../../context/Form/formHook";
import CustomCheckbox from "../CustomCheckbox";

const PanelPlay = () =>{
  const { playRoulette,  isSpinning } = useRoulette();
  const { acceptedTerm, onChangeTyC} = useForm();
  const { onInputChange, inputs, onValidateForm, errors } = useForm();

  const validateInformation = () => {
    if(onValidateForm?.(inputs, acceptedTerm ?? false)){
      playRoulette?.()
    }
  }

  console.log("Errors:", errors)

    return(
      <div className="ruleta_panel">
        <div className="ruleta_panel_play">
          <h3>¡Gira y encuentra tu ahorro!</h3>
          <p>Juega nuestra ruleta de descuentos y descubre cuanto puedes ahorrar en tus compras</p>
          <div className="ruleta_panel_tyc">
            <input type="text" placeholder="Ingresa tu correo" value={inputs.email} onChange={onInputChange} name="email"/>
            <CustomCheckbox label="Acepto los terminos y condiciones" checked={acceptedTerm ?? false} onChange={onChangeTyC}/>
            { 
              (errors?.terminosError ||  errors?.emailError) && 
              <div className="ruleta_panel_errors">
                <span className="ruleta_form_error">{errors?.terminosError}</span>
                <span className="ruleta_form_error">{errors?.emailError}</span>
              </div>
            }
          </div>
        </div>
        <button type="button" className={`ruleta_play ${isSpinning ? 'ruleta_play_disabled' : ''}`} onClick={validateInformation} disabled={isSpinning}>Jugar</button>
      </div>
    )
}

export default PanelPlay