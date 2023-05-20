
import WeekView from './features/WeekView';
import './App.css';
import AddExercise from './features/AddExercise';
import { useState } from 'react';
import { TEST_EXERCISE_DATA } from './TEST_EXERCISE_DATA';


function App() {

  const [exercise, setExercise] = useState(TEST_EXERCISE_DATA);

  const deleteExercise = (id) => {
    setExercise(exercise.filter(exercise => exercise.id !== id))
  }

  const addExercise = (newExercise) => {
    setExercise(exercise.concat(newExercise))
  }

  return(
    <>
      <WeekView deleteExercise={deleteExercise} exercise={exercise}/>
      <AddExercise addExercise={addExercise}/>
    </>
  )
}


export default App;