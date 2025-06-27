import { useEffect, useState, type ReactNode } from 'react';
import RouletteContext from './RouletteContext';
import type { Promotion } from '../../types/wheel';
import promotionsList from '../../db/promotions.json'


export const RouletteProvider = ({ children }:{ children: ReactNode}) => {
  const [promotions,setPromotions] = useState<Promotion[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [promotion,setPromotion] = useState<Promotion | null>(null)
  const [spinRoulette, setSpinRoulette] = useState(false);
  const [degreeToFall, setDegreeToFall] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [lastRotation, setLastRotation] = useState(0);
  const [lastPrizeAngule, setLastPrizeAngule] = useState(0);
  const [isDone, setIsDone] = useState<boolean>(false)
/*   
    const [prize, setPrize] = useState<Prize | null>(
      null
     );

   
  
    const onChangePrize = (values: Prize) => {
      setPrize(values);
      //localStorage.setItem('prizeRoulette', JSON.stringify(values));
    }
   */
    /* useEffect(() =>{
      let prizeRoulette = localStorage?.getItem('prizeRoulette');
      if(prizeRoulette){
        //setUser(JSON.parse(prizeRoulette))
      }
    },[]) */
  
  useEffect(()=>{
    setColors(['#fff', '#DB061C'])
  },[])

 
  useEffect(() => { 
    const promotionsBase: Promotion[] = promotionsList;

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

  function playRoulette() {
    if(isSpinning) return
    
    const randomNumber: number = Math.round(Math.random() * 100) / 100; 
    let acumulado: number = 0;
    let promotion: Promotion | null = null;
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

  
  function onIsDone(value: boolean){
    setIsDone(value)
  }

  function onClearRoulette(){
    setIsSpinning(false)
    setSpinRoulette(false)
  }

  return(
    <RouletteContext.Provider value={{promotions, colors, playRoulette, degreeToFall, isSpinning, isDone, onIsDone, onClearRoulette}}>
      {
        children
      }
    </RouletteContext.Provider>
  )

}
