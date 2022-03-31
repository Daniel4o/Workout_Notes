import useFormExercises from "./useFormExercises";
import { List, ListItem, ListItemText, Button, IconButton, Grid, Typography } from '@mui/material';
import {Delete, Folder} from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Exercises = () => {
    const { categories, deletedCategories, error, isLoading, exercises } = useFormExercises()

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid>
        <List>
            {exercises.map(exercise => (
                <ul>
                            <ListItem secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                     <Delete/>
                    </IconButton>
                  }>
                     <Button ><Link to={`/exercises/edit/${exercise.id}`}>
                      <Folder />
                     </Link>
                        </Button> 

                                <ListItemText primary={exercise.exercise_name} />
                            </ListItem>
                    </ul>
            ))}
        </List>
                </Grid>
    )
}

export default Exercises