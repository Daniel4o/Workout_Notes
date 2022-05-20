import useFormWorkoutById from "./useFormWorkoutById";
import { Table, TableBody, TableCell, TableRow, TableHead, Button, Card, Grid, Typography, Dialog, LinearProgress, DialogContent, DialogActions, Box, DialogTitle, DialogContentText } from '@mui/material'
import { Warning } from '@mui/icons-material';

const WorkoutById = () => {
  const { error, isLoading, workoutExercises, date, open, handleClose, handleClickOpen, deleteWorkout } = useFormWorkoutById()

  if (isLoading) {
    return (<LinearProgress color="secondary" />)
  }
  if (error) {
    return <h2>There was an error: {error}</h2>
  }
  return (
    <Grid className='content'>
      <Card className='tableCardWorkoutById'>
        <h1>
          Workouts
        </h1>
        <Typography className='dateWorkout'>Date: {date}</Typography>
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
            <Button id='buttonDel' variant='outlined' onClick={handleClickOpen}>Delete</Button>
            {workoutExercises.map((workout) => (
              <Dialog
                className='dialog'
                open={open}
                onClose={handleClose}
              >
                <Box className='dialogBox'>
                  <DialogTitle className='dialogTitle'>
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
            <Button variant='contained' id='buttonBack' href={('/workouts')}>Back To Workouts</Button>
        </Table>
      </Card>
    </Grid>
  );
}

export default WorkoutById