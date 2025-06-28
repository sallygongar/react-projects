import { createContext } from 'react';
import type { Prize, Promotion, WheelProps } from '../../types/wheel';
import type { IActions } from '../../types/actions';

interface RouletteContextProps extends WheelProps, IActions {
  isSpinning?: boolean
  degreeToFall?: number
  isDone?: boolean
  promotion?: Promotion | null
  prize?: Prize | null
}

const RouletteContext = createContext<RouletteContextProps | null>(null);

export default RouletteContext;
