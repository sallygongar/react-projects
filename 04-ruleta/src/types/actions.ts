import type { ChangeEvent } from "react"
import type { FormInputs } from "./forms"
import type { Prize } from "./wheel"

export interface IActions{
  playRoulette?: () => void
  onChangeTyC?: (value: boolean) => void
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePrize?: (values: Prize) => void
  onValidateForm?: (values: FormInputs, acceptedTerm: boolean) => boolean
  onIsDone?: (value: boolean) => void
  onClearUser?: () => void
  onClearRoulette?: () => void
  onClearForm?: () => void
}