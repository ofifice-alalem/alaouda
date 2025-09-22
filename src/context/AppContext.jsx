import React, { createContext, useContext, useReducer } from 'react';

// State interface definition
const initialState = {
  user: null,
  loading: false,
  error: null
};

// Action types (following DRY principle)
const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

/**
 * Reducer following Single Responsibility Principle
 * Each action type has a specific responsibility
 */
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload, loading: false, error: null };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ActionTypes.CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

// Context creation with default value
const AppContext = createContext(initialState);

/**
 * Context Provider component
 * Encapsulates state management logic (Encapsulation principle)
 */
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators (following Interface Segregation)
  const actions = {
    setLoading: (loading) => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
    setUser: (user) => dispatch({ type: ActionTypes.SET_USER, payload: user }),
    setError: (error) => dispatch({ type: ActionTypes.SET_ERROR, payload: error }),
    clearError: () => dispatch({ type: ActionTypes.CLEAR_ERROR })
  };

  const value = {
    ...state,
    ...actions
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook for consuming context
 * Follows Dependency Inversion Principle
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};