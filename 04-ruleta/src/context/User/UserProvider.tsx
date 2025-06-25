import { useEffect, useState, type ReactNode } from 'react';
import UserContext from './UserContext';
import type { Prize } from '../../types/user';

export const UserProvider = ({ children } : { children: ReactNode}) => {
  const [acceptedTerm, setAcceptedTerm] = useState<boolean>(false)
  const [prize, setPrize] = useState<Prize | null>(
   null
  );
  
  const onChangeTyC = (term: boolean) => {
    setAcceptedTerm(term)
  }

  const onChangePrize = (values: Prize) => {
    setPrize(values);
  }

  useEffect(() =>{
    if(prize){
      console.log("Este es el valor de prizze:", prize)
    }
  },[prize])

   function onClearUser(){
    setAcceptedTerm(false)
  }
   
  return(
    <UserContext.Provider value={{ acceptedTerm, prize, onChangeTyC, onChangePrize, onClearUser}}>
      {
        children
      }
    </UserContext.Provider>

  )
}