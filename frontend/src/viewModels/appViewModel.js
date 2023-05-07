import React, { useContext, useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import * as repository from '../services/repository';

const appViewModelContext = React.createContext();

export const AppViewModelProvider = appViewModelContext.Provider;

export function useAppViewModel() {
  return useContext(appViewModelContext);
}

export function AppViewModel() {
  const cartOpenState = new BehaviorSubject(false);
  const cartState = new BehaviorSubject();

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

  const toggleCartState = async (productId) => {
    await repository.toggleCart(productId);
    cartState.next(await repository.getCart());
  };

  const useCartState = () => {
    const [value, setValue] = useState();
    useEffect(() => {
      const sub = cartState.subscribe((newValue) => setValue(newValue));
      return () => sub.unsubscribe();
    });
    return value;
  };

  return {
    setCartOpenState,
    useCartOpenState,
    toggleCartState,
    useCartState,
  };
}
