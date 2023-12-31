import { createContext, useContext } from 'react';

const NatourContext = createContext();

function NatourProvider({ children }) {
  return <NatourContext.Provider>{children}</NatourContext.Provider>;
}

function useNatourData() {
  const context = useContext(NatourContext);
  if (!context)
    throw new Error('NatourContext is used outside of the NatourProvider');
  return context;
}

export { NatourProvider, useNatourData };
