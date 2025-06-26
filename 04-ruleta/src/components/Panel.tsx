import { useUser } from "../context/User/userHook";
import PanelPlay from "./panel/PanelPlay";
import PanelDisplayAward from "./panel/PanelDisplayAward";

const Panel = () => {
  const { prize } = useUser();
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