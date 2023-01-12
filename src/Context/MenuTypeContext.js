import React, { createContext, useState } from "react";

export const MenuTypeContext = createContext();

export const MenuTypeProvider = ({ children }) => {
  const [menuType, setMenuType] = useState("Products");  
  return (
    <MenuTypeContext.Provider value={{menuType, setMenuType}}>
      {children}
    </MenuTypeContext.Provider>
  );
};