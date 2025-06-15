import { useRoulette } from "../context/roulette/rouletteHook";

const InfoPanel = () => {
  
  const { playRoulette } = useRoulette();

  return(
    <div className="ruleta_right_wrapper">
      <button type="button" className="ruleta_play" onClick={playRoulette}>Jugar</button>
    </div>
  )
}

export default InfoPanel;