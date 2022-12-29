import React, { createContext, useState } from "react";

export const MenuTypeContext = createContext();

export const MenuTypeProvider = ({ children }) => {
  const [menuType, setMenuType] = useState("Pizzas");  
  return (
    <MenuTypeContext.Provider value={{menuType, setMenuType}}>
      {children}
    </MenuTypeContext.Provider>
  );
};