import { useState, type ChangeEvent, type ReactNode } from "react";
import FormContext from "./FormContext";
import type { /*FormErrors,*/ FormInputs } from "../../types/forms";

export const FormProvider = ({ children } : { children: ReactNode}) => {
  const [inputs,setInputs] = useState<FormInputs>({
    email: ""
  });
  //const [errors, setErrors] = useState<FormErrors>({});

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [name]: value})
  }

  const onValidateForm = (values: FormInputs, acceptedTerm: boolean) => {
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

   if(values.email){
      if(!correoRegex.test(values.email)){
        console.log("No es un correo valido")
        return isValid = false;
      }
      if(!acceptedTerm){
        console.log("Favor de aceptar terminos y condiciones...")
        return isValid = false;
      }
    }else{
      console.log("Ingrese un email valido...")
      return isValid = false;
    }
    return isValid;
  }

  
return(
  <FormContext.Provider value={{inputs, onInputChange, onValidateForm}}>
    {
      children
    }
  </FormContext.Provider>
)

}