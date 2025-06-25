import { useState, type ChangeEvent, type ReactNode } from "react";
import FormContext from "./FormContext";
import type { FormErrors, FormInputs } from "../../types/forms";

export const FormProvider = ({ children } : { children: ReactNode}) => {
  const [inputs,setInputs] = useState<FormInputs>({
    email: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [name]: value})
  }

  const onValidateForm = (values: FormInputs, acceptedTerm: boolean) => {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
    let errorsNews: FormErrors = {}

    if(values.email){
      if(!correoRegex.test(values.email)){
        errorsNews['emailError'] = "No es un correo valido";
        isValid = false;
      }
      if(!acceptedTerm){
        errorsNews['terminosError'] = "Debe aceptar terminos y condiciones.";
        isValid = false;
      }
    }else{
      errorsNews['emailError'] = "No es un correo valido";
      isValid = false;
    }
    setErrors(errorsNews);
    return isValid;
  }

  const onClearForm = () => {
    setErrors({})
    setInputs({email: ""})
  }

  
return(
  <FormContext.Provider value={{inputs, onInputChange, onValidateForm, errors, onClearForm}}>
    {
      children
    }
  </FormContext.Provider>
)

}