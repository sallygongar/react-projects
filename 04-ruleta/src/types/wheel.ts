import type { ChangeEvent } from "react"
import type { Prize } from "./user"
import type { FormInputs } from "./forms"

export interface IPromotion {
  description: string
  code: string
  probability: number
  grade?: number
  range?: number
  isWin?: boolean
  termsConditions?: string
}

export interface WheelProps  {
  promotions: IPromotion[]
  colors: string[]
  promotion?: IPromotion | null
  isDone?: boolean
}

export interface IActions{
  playRoulette?: () => void
  isSpinning?: boolean
  degreeToFall?: number
  onChangeTyC?: (value: boolean) => void
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePrize?: (values: Prize) => void
  onValidateForm?: (values: FormInputs, acceptedTerm: boolean) => boolean
  onIsDone?: (value: boolean) => void
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined