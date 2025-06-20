import { useState, type ReactNode, type ChangeEvent } from 'react';
import UserContext from './UserContext';
import type { Prize } from '../../types/user';

export const UserProvider = ({ children } : { children: ReactNode}) => {
  const [email,setEmail] = useState<string>('');
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

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  }

  const onChangePrize = (values: Prize) => {
    console.log("Información de Prize:", values)
    setPrize(values);
  }
   
  return(
    <UserContext.Provider value={{ email, acceptedTerm, prize, onChangeTyC, onInputChange, onChangePrize}}>
      {
        children
      }
    </UserContext.Provider>

  )
}