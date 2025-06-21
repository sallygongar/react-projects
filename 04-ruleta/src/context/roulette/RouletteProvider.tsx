import { useEffect, useState, type ReactNode } from 'react';
import RouletteContext from './RouletteContext';
import type { IPromotion } from '../../types/wheel';
import promotionsList from '../../db/promotions.json'


export const RouletteProvider = ({ children }:{ children: ReactNode}) => {
  const [promotions,setPromotions] = useState<IPromotion[]>([]);
  const [colors,setColors] = useState<string[]>([]);
  const [promotion,setPromotion] = useState<IPromotion | null | undefined>(null)
  const [spinRoulette, setSpinRoulette] = useState(false);
  const [degreeToFall, setDegreeToFall] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [lastRotation, setLastRotation] = useState(0);
  const [lastPrizeAngule, setLastPrizeAngule] = useState(0);
  
  useEffect(()=>{
    setColors(['#fff', '#DB061C'])
  },[])

 
  useEffect(()=>{
    const promotionsBase: IPromotion[] = promotionsList;

    for(let i = 0; i < promotionsBase.length; i++ ){
      const range = (1 * promotionsBase[i].probability) / 100
      promotionsBase[i] = { ...promotionsBase[i], range: range}
    }

    const orderedPromotions = [...promotionsBase].sort(
      (a, b) => b.probability - a.probability
    )
 
    //Configurando grados

    for(let i = 0; i < orderedPromotions.length; i++){
      if( i === 0){
        orderedPromotions[i] = { ...orderedPromotions[i], grade: 45 }
      }else{
        orderedPromotions[i] = {
          ...orderedPromotions[i], grade: (i +  1) * (360 / orderedPromotions.length)
        }
      }
    }
    setPromotions(orderedPromotions)
  },[])

  function playRoulette(acceptedTerm: boolean) {
    console.log("Terminos y condicones:", acceptedTerm)
    
    if(isSpinning) return
    if(!acceptedTerm) return
    
    const randomNumber: number = Math.round(Math.random() * 100) / 100; 
    let acumulado: number = 0;
    let promotion: IPromotion | null = null;
    for (let i = 0; i < promotions.length; i++) {
      acumulado += promotions[i].range ?? 0;
      if (randomNumber <= acumulado) {
        promotion = promotions[i];
        break;
      }
    }

    if(promotion){
      if(promotion.isWin){
        setTimeout(() => {
          setPromotion(promotion)
          setSpinRoulette(true)
        },1000)
      }
    }
  }

  useEffect(() => {
    if(promotion){
      console.log("Promoción obtenida:", promotion)
      setIsSpinning(true)

      const anglePromotion = promotion.grade || 0;
      let spins = 5
      let baseRotation = spinRoulette
            ? 360 * spins
            : 0;

      let finaRotation = lastRotation + baseRotation - anglePromotion + lastPrizeAngule;
      setDegreeToFall(finaRotation);
      setLastRotation(finaRotation);
      setLastPrizeAngule(anglePromotion);
    }
  },[promotion])

   useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setIsSpinning(false);
        setPromotion(null)
        setSpinRoulette(false)
      }, 10000);
    }
  }, [isSpinning]);


  return(
    <RouletteContext.Provider value={{promotions, colors, playRoulette, promotion, degreeToFall, isSpinning}}>
      {
        children
      }
    </RouletteContext.Provider>
  )

}
