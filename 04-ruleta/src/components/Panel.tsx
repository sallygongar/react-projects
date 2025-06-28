import PanelPlay from "./panel/PanelPlay";
import PanelDisplayAward from "./panel/PanelDisplayAward";
import { useRoulette } from "../context/roulette/rouletteHook";

const Panel = () => {
  const { prize } = useRoulette();
  return(
    <div className="ruleta_right_wrapper">
      {
        prize ? <PanelDisplayAward/> :
        <PanelPlay/>
      }
    </div>
  )
}

export default Panel;