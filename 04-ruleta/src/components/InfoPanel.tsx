import { useRoulette } from "../context/roulette/rouletteHook";

const InfoPanel = () => {
  
  const { playRoulette, isSpinning } = useRoulette();

  return(
    <div className="ruleta_right_wrapper">
      <button type="button" className={`ruleta_play ${isSpinning ? 'ruleta_play_disabled' : ''}`} onClick={playRoulette} disabled={isSpinning}>Jugar</button>
    </div>
  )
}

export default InfoPanel;