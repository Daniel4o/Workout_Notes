import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import { Grid, Card, Button, ListItem, ListItemIcon, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Delete, Edit, Add, Warning, Badge } from '@mui/icons-material';
import useFormWorkouts from './useFormWorkouts';

const Workouts = () => {
  const { workouts, deleteWorkout, error, isLoading} = useFormWorkouts();

  if (isLoading) {
    return <div>Loading...</div>
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
              <TableCell >View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workouts.map((workout, index) => (
              <TableRow key={workout.id}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{workout['userWorkouts.name']}</TableCell>
                <TableCell>{workout.date}</TableCell>
                <TableCell>
                  <ListItem key={workout.id}>
                    <Button href={`/workouts/${workout.id}`}>
                      <ListItemIcon  >
                        <Badge />
                      </ListItemIcon>
                    </Button>
                  </ListItem>
                </TableCell>
                <TableCell align='center'>
                </TableCell>
              </TableRow>
            ))}
            <Divider fullWidth id='divider' />
            <TableRow >
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Overall</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Workouts</TableCell>
              <TableCell align="right">{workouts.length}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Favorite Muscle Trained</TableCell>
              <TableCell align="right">(favorite muscle trained)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Grid>
  );
}


export default Workouts