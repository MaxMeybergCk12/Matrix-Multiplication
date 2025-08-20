// Matrix Store
// Manages matrix state using React hooks and context

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { MatrixState, MatrixAction, MatrixStoreContext as IMatrixStoreContext } from '../types';
import { generateCompleteMatrixState, canMultiply } from '../generators';

// Initial empty state
const initialMatrixState: MatrixState = {
  matrixA: {
    dimensions: [0, 0],
    values: [],
    id: ''
  },
  matrixB: {
    dimensions: [0, 0],
    values: [],
    id: ''
  },
  matrixC: null
};

// Matrix state reducer
function matrixReducer(state: MatrixState, action: MatrixAction): MatrixState {
  switch (action.type) {
    case 'SET_MATRIX_A':
      return { ...state, matrixA: action.payload };
      
    case 'SET_MATRIX_B':
      return { ...state, matrixB: action.payload };
      
    case 'SET_MATRIX_C':
      return { ...state, matrixC: action.payload };
      
    case 'UPDATE_MATRIX_VALUE': {
      const { matrixId, row, col, value } = action.payload;
      
      if (matrixId === state.matrixA.id) {
        const newValues = [...state.matrixA.values];
        newValues[row][col] = value;
        return {
          ...state,
          matrixA: { ...state.matrixA, values: newValues }
        };
      }
      
      if (matrixId === state.matrixB.id) {
        const newValues = [...state.matrixB.values];
        newValues[row][col] = value;
        return {
          ...state,
          matrixB: { ...state.matrixB, values: newValues }
        };
      }
      
      if (matrixId === state.matrixC?.id) {
        const newValues = [...state.matrixC.values];
        newValues[row][col] = value;
        return {
          ...state,
          matrixC: { ...state.matrixC, values: newValues }
        };
      }
      
      return state;
    }
    
    case 'RESET_MATRICES':
      return initialMatrixState;
      
    case 'GENERATE_NEW_MATRICES': {
      const { matrixA, matrixB } = action.payload;
      
      if (!canMultiply(matrixA, matrixB)) {
        console.warn('Cannot multiply matrices with these dimensions');
        return state;
      }
      
      const newState = generateCompleteMatrixState(matrixA, matrixB);
      return newState;
    }
    
    default:
      return state;
  }
}

// Create the context
const MatrixStoreContext = createContext<IMatrixStoreContext | undefined>(undefined);

// Matrix store provider component
export const MatrixStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(matrixReducer, initialMatrixState);
  
  // Generate new matrices with given dimensions
  const generateMatrices = useCallback((matrixA: [number, number], matrixB: [number, number]) => {
    dispatch({ type: 'GENERATE_NEW_MATRICES', payload: { matrixA, matrixB } });
  }, []);
  
  // Update a specific matrix value
  const updateMatrixValue = useCallback((matrixId: string, row: number, col: number, value: number) => {
    dispatch({ type: 'UPDATE_MATRIX_VALUE', payload: { matrixId, row, col, value } });
  }, []);
  
  // Reset all matrices
  const resetMatrices = useCallback(() => {
    dispatch({ type: 'RESET_MATRICES' });
  }, []);
  
  const contextValue: IMatrixStoreContext = {
    state,
    dispatch,
    generateMatrices,
    updateMatrixValue,
    resetMatrices
  };
  
  return (
    <MatrixStoreContext.Provider value={contextValue}>
      {children}
    </MatrixStoreContext.Provider>
  );
};

// Hook to use the matrix store
export function useMatrixStore(): IMatrixStoreContext {
  const context = useContext(MatrixStoreContext);
  if (context === undefined) {
    throw new Error('useMatrixStore must be used within a MatrixStoreProvider');
  }
  return context;
}
