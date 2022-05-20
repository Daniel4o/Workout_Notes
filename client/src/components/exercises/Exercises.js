import useFormExercises from "./useFormExercises";
import { List, ListItem, ListItemText, Button, IconButton, Grid, Checkbox, FormControlLabel, Divider, Card, LinearProgress } from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import { useState } from 'react';
import './Exercises.css';

const Exercises = () => {
    const { error, isLoading, exercises, deleteExercise } = useFormExercises();
    const [showCategories, setShowCategories] = useState(false);

    if (isLoading) {
        return (<LinearProgress color="secondary" />)
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <Grid container className='content' >
            <Card className='exerciseCard'>
                <h1>Exercises</h1>
                <FormControlLabel sx={{ width: '500px' }}
                    label="Show Categories"
                    control={
                        <Checkbox
                            sx={{ ml: 2 }}
                            checked={showCategories}
                            onChange={(event) => setShowCategories(event.target.checked)}
                        />
                    }
                />
                <Button variant='fab' href={('/exercises/add')}>
                    <Add />
                </Button>
                <Divider />
                <Grid className="exerciseContent" >
                    {exercises.map(exercise => (
                        <Card>
                            <List>
                                <ListItem key={exercise.id}>
                                    <Button
                                        sx={{ mr: 4 }}
                                        href={(`/exercises/edit/${exercise.id}`)} >
                                        <Edit />
                                    </Button>
                                    <ListItemText id='exerciseList'
                                        primary={exercise.exercise_name}
                                        secondary={showCategories ? exercise["exerciseCategories.category_name"] : null}
                                    />
                                    <IconButton onClick={() => deleteExercise(exercise.id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItem>
                            </List>
                        </Card>
                    ))}
                </Grid>
            </Card>
        </Grid>
    )
}

export default Exercises