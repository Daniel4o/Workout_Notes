import useFormWorkoutById from "./useFormWorkoutById";
import { Table, TableBody, TableCell, TableRow, TableHead, Button, Card, Grid, Typography, Dialog, LinearProgress, DialogContent, DialogActions, Box, DialogTitle, DialogContentText } from '@mui/material'
import { Warning, Badge } from '@mui/icons-material';

const WorkoutById = () => {
  const { error, isLoading, workoutExercises, date, open, handleClose, handleClickOpen, deleteWorkout } = useFormWorkoutById()

  if (isLoading) {
    return (<LinearProgress color="secondary" />)
  }
  if (error) {
    return <Grid>There was an error: {error}</Grid>
  }
  return (
    <Grid className='content'>
      <Card className='tableCardWorkoutById'>
        <h1>
          Workouts
        </h1>
        <Typography sx={{ mr: 2 }} align='right'>Date: {date}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exercise</TableCell>
              <TableCell >Sets</TableCell>
              <TableCell >Reps</TableCell>
              <TableCell >Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workoutExercises.map((workout) => (
              <TableRow>
                <TableCell>{workout.exercise_name}</TableCell>
                <TableCell align="right">{workout['workout_volume.sets']}</TableCell>
                <TableCell align="right">{workout['workout_volume.reps']}</TableCell>
                <TableCell align="right">{workout['workout_volume.weight']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button variant='outlined' onClick={handleClickOpen}>Delete</Button>
            {workoutExercises.map((workout) => (
              <Dialog
                open={open}
                onClose={handleClose}
                style={{ borderColor: 'red' }}
              >
                <Box sx={{ borderTop: 3, color: 'red' }}>
                  <DialogTitle sx={{ color: 'black', backgroundColor: 'gainsboro', pl: 11 }}>
                    Delete Workout
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText color='black'>
                      <Warning id='warning' fontSize='large' color='error' />
                      Are you sure you want to delete the workout?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant='contained' onClick={() => deleteWorkout(workout.id)} autoFocus>
                      Yes
                    </Button>
                    <Button variant='outlined' onClick={handleClose}>No</Button>
                  </DialogActions>
                </Box>
              </Dialog>
            ))}
            <Button variant='contained' href={('/workouts')}>Back To Workouts</Button>
          </div>
        </Table>
      </Card>
    </Grid>
  );
}

export default WorkoutById