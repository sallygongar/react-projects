import type { IActions } from "../types/wheel";

const InfoPanel = ({ playRoulette }: IActions) => {
  return(
    <div className="ruleta_right_wrapper">
      <button type="button" className="ruleta_play" onClick={playRoulette}>Jugar</button>
    </div>
  )
}

export default InfoPanel;