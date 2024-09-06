import { createContext, useContext } from "react";
import useCounter from "./useCounter";

interface AppState {
  homeTeam: ReturnType<typeof useCounter>;
  awayTeam: ReturnType<typeof useCounter>;
}

const defaultCounterState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

const AppContext = createContext<AppState>({
  homeTeam: { ...defaultCounterState },
  awayTeam: { ...defaultCounterState },
});

function useHomeTeam() {
  const { homeTeam } = useContext(AppContext);
  return homeTeam;
}

function useAwayTeam() {
  const { awayTeam } = useContext(AppContext);
  return awayTeam;
}

export { AppContext, useHomeTeam, useAwayTeam };
