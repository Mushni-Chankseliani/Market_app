import { useState } from 'react';

export const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const record = window.localStorage.getItem(key);
      return record ? JSON.parse(record) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setLocalStorage = (newState) => {
    try {
      const newValue = typeof newState === 'function' ? newState(state) : newState;
      setState(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('unable to store value, reason: ', error.message);
    }
  };

  return [state, setLocalStorage];
};

export default useLocalStorage;
