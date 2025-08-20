// Matrix State Management Types
// Defines interfaces for state management and updates

import { MatrixData, MatrixState } from './matrixData';

// Action types for state updates
export type MatrixAction = 
  | { type: 'SET_MATRIX_A'; payload: MatrixData }
  | { type: 'SET_MATRIX_B'; payload: MatrixData }
  | { type: 'SET_MATRIX_C'; payload: MatrixData }
  | { type: 'UPDATE_MATRIX_VALUE'; payload: { matrixId: string; row: number; col: number; value: number } }
  | { type: 'RESET_MATRICES' }
  | { type: 'GENERATE_NEW_MATRICES'; payload: { matrixA: [number, number]; matrixB: [number, number] } };

// State update function type
export type MatrixStateUpdater = (action: MatrixAction) => void;

// Matrix store context interface
export interface MatrixStoreContext {
  state: MatrixState;
  dispatch: MatrixStateUpdater;
  generateMatrices: (matrixA: [number, number], matrixB: [number, number]) => void;
  updateMatrixValue: (matrixId: string, row: number, col: number, value: number) => void;
  resetMatrices: () => void;
}

// Matrix change callback
export type MatrixChangeCallback = (newState: MatrixState) => void;

// Matrix store options
export interface MatrixStoreOptions {
  onStateChange?: MatrixChangeCallback;
  persistState?: boolean;  // Save to localStorage
  storageKey?: string;     // localStorage key
}
