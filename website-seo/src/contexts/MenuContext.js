import { createContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [index, setIndex] = useState(1);

  const toggleSetIndex = (value) => {
    setIndex(value);
  };

  const value = {
    index,
    toggleSetIndex,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export { MenuProvider, MenuContext };
