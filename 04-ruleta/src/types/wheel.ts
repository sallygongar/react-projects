import type { ChangeEvent } from "react"
import type { Prize } from "./user"

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
}

export interface IActions{
  playRoulette?: (value: boolean) => void
  isSpinning?: boolean
  degreeToFall?: number
  onChangeTyC?: (value: boolean) => void
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePrize?: (values: Prize) => void
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined