import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Grid, Card, Button, Divider, LinearProgress } from '@mui/material';
import { Add, Assignment } from '@mui/icons-material';
import useFormWorkouts from './useFormWorkouts';

const Workouts = () => {
  const { workouts, error, isLoading } = useFormWorkouts();

  if (isLoading) {
    return (<LinearProgress color="secondary" />)
  }
  if (error) {
    return <div>There was an error: {error}</div>
  }

  return (
    <Grid className='content'>
      <Card className='tableCardWorkout'>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell colSpan={6}>
                <h1>
                  Workouts
                </h1>
                <Button href={('/workouts/add')}>
                  <Add />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workouts.map((workout, index) => (
              <TableRow key={workout.id}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{workout['userWorkouts.name']}</TableCell>
                <TableCell>{workout.date}</TableCell>
                <TableCell >
                  <Button href={`/workouts/${workout.id}`}>
                    <Assignment />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <Divider fullwidth='true' id='divider' />
            <TableRow >
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Overall</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Workouts</TableCell>
              <TableCell align="right">{workouts.length}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Grid>
  );
}


export default Workouts