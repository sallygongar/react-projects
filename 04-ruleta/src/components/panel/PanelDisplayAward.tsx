import { useState } from "react";
import { useRoulette } from "../../context/roulette/rouletteHook";

//import { Copy } from '@/assets/images/Copy'

const PanelDisplayAward = () => {
  const { prize } = useRoulette();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if(prize?.code){
        await navigator.clipboard.writeText(prize?.code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Mensaje por 2 segundos
      }
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };


  return(
    <div className="ruleta_panel">
      <div className="ruleta_panel_description">
       {
        prize?.isWin ?
        <>
          <h3>¡Felicidades has ahorrado!</h3>
          <p>Gracias por jugar la ruleta, es momento de hacer uso de tu cupón comprando tu producto favorito en nuestra tienda</p>
        </>
        :
        <>
          <h3>¡Esta vez no fue posible!</h3>
          <p>Te agradecemos por haber participado, te esperamos en nuestra proxima temporada.</p>
        </>
       }
        <div className="ruleta_form_group">
          <p>Usa el siguiente cupón</p>
          <div className="ruleta_form_coupon">
           <p> { prize?.code }</p>
          
           <button onClick={copyToClipboard} >
              {isCopied ? "¡Copiado!" : "Copiar Cupón"}
            </button>
          </div>
        
        </div>
      </div> 
    </div>
  )
}

export default PanelDisplayAward;