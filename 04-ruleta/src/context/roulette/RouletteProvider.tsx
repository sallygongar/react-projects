import { useEffect, useState, type ReactNode } from 'react';
import RouletteContext from './RouletteContext';
import type { IPromotion } from '../../types/wheel';
import promotionsList from '../../db/promotions.json'


export const RouletteProvider = ({ children }:{ children: ReactNode}) => {
  const [promotions,setPromotions] = useState<IPromotion[]>([]);
  const [colors,setColors] = useState<string[]>([]);

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
    <RouletteContext.Provider value={{promotions, colors, playRoulette}}>
      {
        children
      }
    </RouletteContext.Provider>
  )

}
