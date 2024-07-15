import { createContext } from 'react';
import { ProviderInterface } from '../types/types';

export const AuthContext = createContext<ProviderInterface | null>(null);
