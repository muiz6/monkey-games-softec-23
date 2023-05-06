import React, { useContext, useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

const appViewModelContext = React.createContext();

export const AppViewModelProvider = appViewModelContext.Provider;

export function useAppViewModel() {
  return useContext(appViewModelContext);
}

export function AppViewModel() {
  const cartOpenState = new BehaviorSubject(false);

  const useCartOpenState = () => {
    const [value, setValue] = useState();
    useEffect(() => {
      const sub = cartOpenState.subscribe((newValue) => setValue(newValue));
      return () => sub.unsubscribe();
    }, []);
    return value;
  };

  const setCartOpenState = (isOpen) => {
    cartOpenState.next(isOpen);
  };

  return {
    setCartOpenState,
    useCartOpenState,
  };
}
