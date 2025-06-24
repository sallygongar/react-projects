import { useState, type ReactNode } from 'react';
import UserContext from './UserContext';
import type { Prize } from '../../types/user';

export const UserProvider = ({ children } : { children: ReactNode}) => {
  const [acceptedTerm, setAcceptedTerm] = useState<boolean>(false)
  const [prize, setPrize] = useState<Prize>(
    {
      description: "",
      code: "",
      grade: 0,
      isWin: false,
      termsConditions: ""
    }
  );
  
  const onChangeTyC = (term: boolean) => {
    setAcceptedTerm(term)
  }

  const onChangePrize = (values: Prize) => {
    setPrize(values);
  }

   
  return(
    <UserContext.Provider value={{ acceptedTerm, prize, onChangeTyC, onChangePrize}}>
      {
        children
      }
    </UserContext.Provider>

  )
}