import { AppContext } from "./AppContext";
import useCounter from "./useCounter";

function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <AppContext.Provider
      value={{ homeTeam: useCounter(), awayTeam: useCounter() }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
