export type promotion = {
    description: string
    code: string
    probability: number
    grade?: number
    range?: number
    isWin?: boolean
    termsConditions?: string
  }

export type WheelProps = {
  promotions: promotion[],
  colors: string[]
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined