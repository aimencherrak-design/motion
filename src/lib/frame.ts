import {createContext, useContext} from 'react';
import {useCurrentFrame} from 'remotion';

// Décalage local : les scènes commencent à être rendues avant leur début (transitions)
export const OffCtx = createContext(0);
export const useF = () => useCurrentFrame() - useContext(OffCtx);
