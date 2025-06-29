import { useEffect, useRef, useState } from "react";
import { useRoulette } from "../../context/roulette/rouletteHook";

import copy from '@assets/images/Copy.png'

const PanelDisplayAward = () => {
  const { prize } = useRoulette();
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  const copyToClipboard = async () => {
    try {
      if(prize?.code){
        await navigator.clipboard.writeText(prize?.code);
        setIsCopied(true);
        setClicked(true)
        setTimeout(() => {
          setIsCopied(false) 
          setClicked(false)}, 
        2000); // Mensaje por 2 segundos
      }
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsCopied(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

   const handleMouseEnter = () => {
    setIsCopied(true);
  };

  const handleMouseLeave = () => {
    // Solo ocultamos si no fue por clic
   setIsCopied(false);
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
          <div className="ruleta_form_coupon" ref={buttonRef}>
           <p className="ruleta_code"> { prize?.code }</p>
           <button  className="ruleta_button_copy" 
              onClick={copyToClipboard} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
           style={{backgroundColor: "transparent"}} >
              <img src={copy} alt="Logo" />
            </button>
          { isCopied && <span className="ruleta_tooltip">{clicked ? '¡Copiado!' : '¡Copiar!'}</span>}
          </div>
        
        </div>
      </div> 
    </div>
  )
}

export default PanelDisplayAward;