import WeekView from "./features/WeekView";
import "./App.css";
import AddExercise from "./features/AddExercise";
import { useState } from "react";

let nextId = 10;

function App() {
  const [exercise, setExercise] = useState([]);

  const deleteExercise = (id) => {
    setExercise(exercise.filter((exercise) => exercise.id !== id));
  };

  const addExercise = (newExerciseData) => {
    const newExercise = {
      id: nextId++,
      ...newExerciseData,
    };
    setExercise(exercise.concat(newExercise));
  };

  return (
    <>
      <WeekView deleteExercise={deleteExercise} exercise={exercise} />
      <AddExercise addExercise={addExercise} />
    </>
  );
}

export default App;
