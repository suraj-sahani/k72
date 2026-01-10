import { createContext, type ReactNode, useContext, useState } from "react";

interface NavContextValue {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navColor: string;
  setNavColor: React.Dispatch<React.SetStateAction<string>>;
}

export const NavContext = createContext<NavContextValue | null>(null);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState("black");

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen, navColor, setNavColor }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
