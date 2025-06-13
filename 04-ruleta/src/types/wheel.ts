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
  promotions: IPromotion[],
  colors: string[]
}

export interface IActions{
  playRoulette?: () => void
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined