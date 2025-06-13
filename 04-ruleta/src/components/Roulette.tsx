import { useEffect, useState } from "react";
import Wheel from "./Wheel";
import InfoPanel from "./InfoPanel";
 import type { IPromotion } from "../types/wheel";

const promotionList: IPromotion[] = [
  {
    description: '*30%*\nen pañales\n*Huggies*',
    code: '30PAHU',
    probability: 20,
    isWin: true
  },
  {
    description: '*15%*\nen\n*sopas*',
    code: '15SOPAS',
    probability: 20,
    isWin: true
  },
  {
    description: '*5%*\nen Linea\n*Blanca*',
    code: '5ELINBA',
    probability: 15,
    isWin: true
  },
  {
    
    description: '*Envio*\nGratis',
    code: 'ENVIGRAT',
    probability: 15,
    isWin: true
  },
  {
    description:  '*20%*\nen toda\nla tienda',
    code: '20ETTENDA',
    probability: 10,
    isWin: true
  },
  {
    description: '*10%*\nen Refrescos',
    code: '10EREFRSC',
    probability: 10,
    isWin: true
  },
  {
    description: '*2 x 1*\nen suerox',
    code: '2x1SUEROX',
    probability: 5,
    isWin: true
  },
  {
    description: '*4%*\nen Cristaleria\n*Hogar*',
    code: '4CRISTAHG',
    probability: 5,
    isWin: true
  }
];

const colors = ['#fff', '#DB061C'];

const Roulette = () => {
  const [promotions,setPromotions] = useState<IPromotion[]>([])

  useEffect(()=>{
    const promotionsBase = promotionList;

    for(let i = 0; i < promotionsBase.length; i++ ){
      const range = (1 * promotionsBase[i].probability) / 100
      promotionsBase[i] = { ...promotionsBase[i], range: range}
    }

    const orderedPromotions = [...promotionsBase].sort(
      (a, b) => b.probability - a.probability
    )
 
    /* Configurando grados */
    for(let i = 0; i < orderedPromotions.length; i++){
      if( i === 0){
        orderedPromotions[i] = { ...orderedPromotions[i], grade: -45 }
      }else{
        
        orderedPromotions[i] = {
          ...orderedPromotions[i], grade: (orderedPromotions[i - 1].grade || 0) - (360 / orderedPromotions.length)
        }
      }
    }
    setPromotions(orderedPromotions)
    
  },[])

  function playRoulette(){
    console.log("Jugar...")
  }
  
  return(
    <div className="ruleta">
      <Wheel promotions={promotions} colors={colors}/>
      <InfoPanel playRoulette={playRoulette}/>
    </div>
  )
}

export default Roulette;