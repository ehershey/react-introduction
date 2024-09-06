import "./App.css";
import { useAwayTeam, useHomeTeam } from "./AppContext";
import Counter from "./Counter";
import Section from "./Section";

function App() {
  const { count: homeTeamScore, increment: scoreHomeTeam } = useHomeTeam();
  const { count: awayTeamScore, increment: scoreAwayTeam } = useAwayTeam();

  return (
    <>
      <Section title="Hallo!">Willkommen zu dem besten React Tutorial!</Section>
      <Counter
        count={homeTeamScore}
        increment={scoreHomeTeam}
        decrement={() => {}}
      />
      <Counter
        count={awayTeamScore}
        increment={scoreAwayTeam}
        decrement={() => {}}
      />
    </>
  );
}

export default App;
