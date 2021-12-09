import React from "react";
interface ContextProps {
  context: any,
  setContext: any,
}

export const Context = React.createContext<Partial<ContextProps>>({})