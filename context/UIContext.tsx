import React, { createContext, useState } from 'react';

type ContextProps = {
  isDrawerOpened: boolean;
  toggleDrawer: (value?: boolean) => void;
};

export const UIContext = createContext({} as ContextProps);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const toggleDrawer = (value?: boolean) => {
    if (value !== undefined) {
      setIsDrawerOpened(value);
      return;
    }

    setIsDrawerOpened((value) => !value);
  };

  return (
    <UIContext.Provider
      value={{
        isDrawerOpened,
        toggleDrawer,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
