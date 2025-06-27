import PanelPlay from "./panel/PanelPlay";
import PanelDisplayAward from "./panel/PanelDisplayAward";

const Panel = () => {

  return(
    <div className="ruleta_right_wrapper">
      {
        false ? <PanelDisplayAward/> :
        <PanelPlay/>
      }
    </div>
  )
}

export default Panel;