import { createContext } from 'react';
import type { WheelProps } from '../../types/wheel';
import type { IActions } from '../../types/actions';

interface RouletteContextProps extends WheelProps, IActions {
  isSpinning?: boolean
  degreeToFall?: number
  isDone?: boolean
}

const RouletteContext = createContext<RouletteContextProps | undefined>(undefined);

export default RouletteContext;
