import { createContext } from "react";
import type { FormErrors, FormInputs } from "../../types/forms";
import type { IActions } from "../../types/wheel";

interface IForm extends IActions {
    inputs: FormInputs,
    errors?: FormErrors
}

const FormContext = createContext<IForm | undefined >(undefined);

export default FormContext