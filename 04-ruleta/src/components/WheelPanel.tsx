import Wheel from "./wheel/Wheel";
import Panel from "./Panel";


const WheelPanel = () => {
  
  return(
    <div className="ruleta">
      <Wheel />
      <Panel/>
    </div>
  )
}

export default WheelPanel;