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
  playRoulette?: () => void
  isSpinning?: boolean
  degreeToFall?: number
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined