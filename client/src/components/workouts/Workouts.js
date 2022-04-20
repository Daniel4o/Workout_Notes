import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { Grid, Container, Card, Paper, Button, List, ListItem, ListItemIcon, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Delete, Edit, Add, ExpandMore, Warning, Badge } from '@mui/icons-material';
import useFormWorkouts from './useFormWorkouts';

const Workouts = () => {
    const { workouts, deleteWorkout, error, isLoading, open, handleClose, handleClickOpen } = useFormWorkouts();
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
      <Grid sx={{ m: 8 }} className='content'>
          <Card sx={{ width: 1000 }}>
              <Table >
                  <TableHead>
                      <TableRow>
                          <TableCell align="center" colSpan={6}>
                              Workouts
                              <Button sx={{ left: '450px' }} href={('/workouts/add')}>
                                  <Add />
                              </Button>
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell align='right'>№</TableCell>
                          <TableCell align="right">User</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">View Details</TableCell>
                          <TableCell align="right">Actions</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {workouts.map((workout, index) => (
                          <TableRow key={workout.id}>
                            <TableCell>{index+1}.</TableCell>
                              <TableCell align='right'>{workout['userWorkouts.name']}</TableCell>
                              <TableCell align="right">{workout.date}</TableCell>
                              <TableCell align="right">
                              <Box>
                  <ListItem 
                  key={workout.id}
                  >
                      <Button  href={`/workouts/${workout.id}`}>
                      <ListItemIcon sx={{pl:18}}>
                          <Badge/>
                      </ListItemIcon>
                      </Button>
                      </ListItem>
                      </Box>
                      </TableCell>
              <TableCell align='center'>
                <Box>
                <Button href={(`/workout/edit/${workout.id}`)}>
                    <Edit />
                  </Button>
                  <Button onClick={handleClickOpen}><Delete /></Button>
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
                          <Warning fontSize='large' color='error' sx={{ mr: 4, pt: 1 }} />
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
                </Box> 
                              </TableCell>
                          </TableRow>
                      ))}
                      <Divider fullWidth sx={{border:'3px', color:'black'}}/>
                      <TableRow>
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