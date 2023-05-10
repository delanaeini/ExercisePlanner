
import { useState } from 'react';
import WeekView from './features/WeekView';
import './App.css';
import EditExercise from './features/EditExercise';


function App() {
  return(
    <>
      <WeekView/>
      <EditExercise />
    </>
  )
}

export default App;
// function ExerciseList() {
//   const [exerciseList, setExerciseList ]= useState([
//     {
//       id: 0,
//       name: "Lat Pulldown",
//       sets: 3,
//       reps: 15,
//       weekday: "Monday"
//     },
//     {
//       id: 1,
//       name: "Cable Row",
//       sets: 3,
//       reps: 15,
//       weekday: "Monday"
//     },
//     {
//       id: 2,
//       name: "Leg Press",
//       sets: 3,
//       reps: 15,
//       weekday: "Wednesday"
//     },
//     {
//       id: 3,
//       name: "Leg Curl",
//       sets: 3,
//       reps: 12
//     },
//     {
//       id: 4,
//       name: "Front Raise",
//       sets: 3,
//       reps: 12
//     }
//   ]);

//   const deleteExercise = (id) => {
//     setExerciseList(exerciseList.filter(exercise => exercise.id !== id))
//   }

//   return (
//     <div>
//       < WeekView />
//       {exerciseList.map(exercise => (
//         <div key={exercise.id}>
//           {`${exercise.name}: ${exercise.sets} x ${exercise.reps}`}
//           <button onClick={() => deleteExercise(exercise.id)}>Delete</button>
//         </div>))}
//     </div>
//   );
// }

// export default ExerciseList;