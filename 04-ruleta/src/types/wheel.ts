export interface Promotion {
  description: string
  code: string
  probability: number
  grade?: number
  range?: number
  isWin?: boolean
  termsConditions?: string
}

export interface WheelProps  {
  promotions: Promotion[]
  colors: string[]
}

export interface Prize {
  email?: string
  description?: string
  code?: string
  isWin?: boolean
  termsConditions?: string
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined