import React, { createContext, useContext, useState, useEffect } from 'react';

interface TOCContextType {
  showTOC: boolean;
  setShowTOC: (show: boolean) => void;
}

const TOCContext = createContext<TOCContextType | undefined>(undefined);

export const TOCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showTOC, setShowTOC] = useState(false);
  return (
    <TOCContext.Provider value={{ showTOC, setShowTOC }}>
      {children}
    </TOCContext.Provider>
  );
};

export const useTOC = (enable: boolean = true) => {
  const context = useContext(TOCContext);
  if (!context) {
    throw new Error('useTOC must be used within a TOCProvider');
  }

  useEffect(() => {
    context.setShowTOC(enable);
    return () => context.setShowTOC(false);
  }, [enable]);
};

export const useTOCState = () => {
  const context = useContext(TOCContext);
  if (!context) {
    throw new Error('useTOCState must be used within a TOCProvider');
  }
  return context.showTOC;
};
