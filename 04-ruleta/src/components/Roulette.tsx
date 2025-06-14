import Wheel from "./Wheel";
import InfoPanel from "./InfoPanel";


const Roulette = () => {

  function playRoulette(){
    console.log("Jugar...")
  }
  
  return(
    <div className="ruleta">
      <Wheel />
      <InfoPanel playRoulette={playRoulette}/>
    </div>
  )
}

export default Roulette;