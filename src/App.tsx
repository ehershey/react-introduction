import { useEffect, useState } from "react";
import "./App.css";
import { useAwayTeam, useHomeTeam } from "./AppContext";
import Counter from "./Counter";
import Section from "./Section";

function App() {
  const { count: homeTeamScore, increment: scoreHomeTeam } = useHomeTeam();
  const { count: awayTeamScore, increment: scoreAwayTeam } = useAwayTeam();
  const [todos, setTodos] = useState<TodoResponse>();

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((todoResponse) =>
        isTodoResponse(todoResponse)
          ? setTodos(todoResponse)
          : setTodos(undefined)
      );
  }, []);

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
      <pre>{todos?.todos[0].todo.toString()}</pre>
    </>
  );
}

// Define the Todo type
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// Define the main data structure
interface TodoResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

// Type guard function
function isTodoResponse(obj: unknown): obj is TodoResponse {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  const response = obj as TodoResponse;

  // Check if todos is an array
  if (!Array.isArray(response.todos)) {
    return false;
  }

  // Check if total, skip, and limit are numbers
  if (
    typeof response.total !== "number" ||
    typeof response.skip !== "number" ||
    typeof response.limit !== "number"
  ) {
    return false;
  }

  // Check each todo item in the array
  for (const todo of response.todos) {
    if (
      typeof todo !== "object" ||
      todo === null ||
      typeof todo.id !== "number" ||
      typeof todo.todo !== "string" ||
      typeof todo.completed !== "boolean" ||
      typeof todo.userId !== "number"
    ) {
      return false;
    }
  }

  return true;
}

export default App;
