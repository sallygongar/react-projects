import { createContext } from "react";
import type { FormErrors, FormInputs } from "../../types/forms";
import type { IActions } from "../../types/actions";

interface IForm extends IActions {
    inputs: FormInputs,
    errors?: FormErrors
    acceptedTerm?: boolean | false
}

const FormContext = createContext<IForm | undefined >(undefined);

export default FormContext