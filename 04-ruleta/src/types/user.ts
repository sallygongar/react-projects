
export interface Prize {
  description?: string
  code?: string
  grade?: number
  isWin?: boolean
  termsConditions?: string
}

export interface User {
  email?: string
  acceptedTerm: boolean
  prize?: Prize | null
}