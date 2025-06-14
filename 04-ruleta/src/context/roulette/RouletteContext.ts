import { createContext } from 'react';
import type { WheelProps, IActions } from '../../types/wheel';

interface RouletteContextProps extends WheelProps, IActions {}

const RouletteContext = createContext<RouletteContextProps | undefined>(undefined);

export default RouletteContext;
