import { Table, Card, CardHeader, CardBody, Button } from "reactstrap";

const WeekView = ({ deleteExercise, exercise }) => {
  const week = ["M", "T", "W", "Th", "F", "Sa", "Su"];

  return (
    <Card>
      <CardHeader className="bg-success">
        <h3>Weekly Calendar</h3>
      </CardHeader>
      <CardBody>
        <Table>
          <tr>
            {week.map((dayofweek) => (
              <th>{dayofweek}</th>
            ))}
          </tr>
          <tr>
            {week.map((dayofweek) => {
              return (
                <td>
                  {exercise
                    .filter((exercise) => {
                      return exercise.exerciseday === dayofweek;
                    })
                    .map((exercise) => {
                      return (
                        <div>
                          {exercise.name}
                          {exercise.sets &&
                            exercise.reps &&
                            `: ${exercise.sets} x ${exercise.reps} `}
                          <Button
                            className="btn-sm mb-2"
                            onClick={() => deleteExercise(exercise.id)}
                          >
                            x
                          </Button>
                        </div>
                      );
                    })}
                </td>
              );
            })}
          </tr>
        </Table>
      </CardBody>
    </Card>
  );
};

export default WeekView;
