import { createContext, useReducer, useContext } from "react";

const SidenavStateContext = createContext(null);
const SidenavDispatchContext = createContext(null);

export default function SidenavProvider({
  children,
  closingMode = "hidden",
  isOpen = false,
}) {
  const initialState = {
    isOpen,
    closingMode,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SidenavStateContext.Provider value={state}>
      <SidenavDispatchContext.Provider value={dispatch}>
        {children}
      </SidenavDispatchContext.Provider>
    </SidenavStateContext.Provider>
  );
}

export function useSidenavState() {
  const context = useContext(SidenavStateContext);
  if (context === undefined) {
    throw new Error("useSidenav must be used within a SidenavProvider");
  }
  return context;
}

export function useSidenavDispatch() {
  const context = useContext(SidenavDispatchContext);
  if (context === undefined) {
    throw new Error("useSidenavDispatch must be used within a SidenavProvider");
  }
  return context;
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDENAV":
      return { ...state, isOpen: !state.isOpen };
    case "OPEN_SIDENAV":
      return { ...state, isOpen: true };
    case "CLOSE_SIDENAV":
      return { ...state, isOpen: false };
    case "SET_CLOSING_MODE":
      return { ...state, closingMode: action.payload };
    default:
      return state;
  }
}
