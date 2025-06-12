export type WheelProps = {
  promotions: {
    description: string
    code: string
    probability: number
    grade?: number
    range?: number
    isWin?: boolean
    termsConditions?: string
  }[],
  colors: string[]
}

export type Canvas = HTMLCanvasElement | null;
export type CanvasContext = CanvasRenderingContext2D | null | undefined