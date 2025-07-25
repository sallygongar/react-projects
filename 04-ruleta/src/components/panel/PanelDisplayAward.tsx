import { useEffect, useRef, useState } from "react";
import { useRoulette } from "../../context/roulette/rouletteHook";

import copy from '@assets/images/Copy.png'
import gifwin from '@assets/images/win.gif';
import gifnowin from '@assets/images/nowin.gif'


const PanelDisplayAward = () => {
  const { prize } = useRoulette();
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  const message = prize && prize.description?.replace(/\*/g, "")?.split('\n')
  
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
      <div className={`ruleta_panel_wrapper ${!prize?.isWin && 'wrapper_notwinner'}`} >
        <div className="ruleta_panel_header">
          { prize?.isWin ? <h3>¡Felicidades!</h3> :  <h3>¡Esta vez no fue posible!</h3>}
          { prize?.isWin ? <img src={gifwin} alt="Felicidades"/> :  <img src={gifnowin} alt="Sigue Participando"/>}
        </div>
        { prize?.isWin ?
          <div className="ruleta_panel_body">
            <div className="ruleta_panel_body-prize">
              <span className="prize_percentaje">{message?.[0]}</span>
              <span className="prize_name-1">{message?.[1]}</span>
              <span className="prize_name-2">{message?.[2]}</span>
            </div>
            <p>Tu cupon de ahorro es:</p>
            <div className="ruleta_panel_action" ref={buttonRef}>
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
          :
          <div className="ruleta_panel_body ruleta_panel_body-not-winner">
            <p>Pero todavia te esperan muchas ofertas</p>
          </div>
        }
        <div className={`ruleta_panel_footer ${!prize?.isWin && 'footer_notwinner'}`}>
           <a className="ruleta_footer_link" href="/">Ver Productos</a>
        </div>
      </div> 
    </div>
  )
}

export default PanelDisplayAward;