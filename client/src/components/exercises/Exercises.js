import useFormExercises from "./useFormExercises";
import { List, ListItem, ListItemText, Button, IconButton, Grid, Box, Checkbox, FormControlLabel, FormGroup, Divider, Card, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Delete, Folder, Add, Warning } from '@mui/icons-material';
import { useState } from 'react';

const Exercises = () => {
    const { categories, deletedCategories, error, isLoading, exercises, open, handleClickOpen, handleClose, deleteExercise } = useFormExercises();
    const [showCategories, setShowCategories] = useState(false);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid container sx={{ m: 10, mt: 4 }} className='content'>
            <Card sx={{ width: 500, m: 8 }}>
                <Typography variant='h4' align='center' sx={{ mb: 4 }}>Exercises</Typography>
                <FormGroup row>
                    <FormControlLabel
                        label="Show Categories"
                        control={
                            <Checkbox
                                checked={showCategories}
                                onChange={(event) => setShowCategories(event.target.checked)}
                            />
                        }
                    />
                    <Button variant='fab' sx={{ ml: 33 }} href={('/exercises/add')}>
                        <Add />
                    </Button>
                </FormGroup>
                <Divider />
                {exercises.map(exercise => (
                    <List>
                        <ListItem
                            key={exercise.id}
                            secondaryAction={
                                <IconButton onClick={handleClickOpen}>
                                    <Delete />
                                </IconButton>
                            }>
                            <Button href={(`/exercises/edit/${exercise.id}`)}>
                                <Folder />
                            </Button>
                            <ListItemText
                                primary={exercise.exercise_name}
                                secondary={showCategories ? exercise["exerciseCategories.category_name"] : null}
                            />
                        </ListItem>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <Box sx={{ borderTop: 3, color: 'red' }}>
                                <DialogTitle sx={{ color: 'black', backgroundColor: 'gainsboro', pl: 11 }}>
                                    Delete Exercise
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText color='black' >
                                        <Warning fontSize='large' color='error' sx={{ mr: 4, pt: 1 }} />
                                        Are you sure you want to delete the exercise: {exercise.exercise_name} ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions sx={{ backgroundColor: 'gainsboro' }}>
                                    <Button variant='contained' onClick={() => deleteExercise(exercise.id)} autoFocus>
                                        Yes
                                    </Button>
                                    <Button variant='outlined' onClick={handleClose}>No</Button>
                                </DialogActions>
                            </Box>
                        </Dialog>
                    </List>
                ))}
            </Card>
        </Grid>
    )
}

export default Exercises