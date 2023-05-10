import { Table, Card, CardHeader ,CardBody} from 'reactstrap';

const WeekView = () => {
   const week = [
    "M", "T", "W", "Th", "F", "Sa", "Su"];

    const workouts = [
        {
        id: 0,
        name: "Lat Pulldown",
        sets: 3,
        reps: 15,
        workoutday: "M"
        },
        {
        id: 1,
        name: "Cable Row",
        sets: 3,
        reps: 15,
        workoutday: "M"
        },
        {
        id: 2,
        name: "Leg Press",
        sets: 3,
        reps: 15,
        workoutday: "W"
        },
        {
        id: 3,
        name: "Leg Curl",
        sets: 3,
        reps: 12,
        workoutday: "W"
        }];

   return (
        <Card>
            <CardHeader className='bg-success'>
                <h3>Week</h3>
            </CardHeader>
            <CardBody>
                {/* <Table>
                    <tr>{week.map((dayofweek) => {
                        return(
                            <>
                            <th>{dayofweek}</th>
                    <tr>
                        <td>
                            {workouts.filter((workout) => {
                                return(
                                    workout.workoutday === dayofweek
                                );
                            }).map((workout) => {
                                return(
                                    <>{workout.name}</>
                                );
                                    })}
                        </td>
                    </tr>
                            </>
                        );
                    })}
                    </tr>
                </Table> */}
                <Table>
                    <tr>{week.map((dayofweek) => <th>{dayofweek}</th>)}
                    </tr>
                    <tr>
                        {week.map((dayofweek) => {
                            return(
                            <td>
                                {workouts.filter((workout) => {
                                    return(
                                        workout.workoutday === dayofweek
                                    );
                                }).map((workout) => {
                                    return(
                                        <div>{workout.name}</div>
                                    );
                                })}
                            </td> 
                        )})}
                    </tr>
                </Table> 
            </CardBody>
        </Card>
    );
};

export default WeekView;