import useFormExercises from "./useFormExercises";
import { List, ListItem, ListItemText, Button, IconButton, Grid, Box, Checkbox, FormControlLabel, FormGroup, Divider, Card, Typography } from '@mui/material';
import { Delete, Folder, Add } from '@mui/icons-material';
import { useState } from 'react';

const Exercises = () => {
    const { categories, deletedCategories, error, isLoading, exercises } = useFormExercises();
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
                <List>
                    {exercises.map(exercise => (
                        <ListItem
                            key={exercise.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
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
                    ))}
                </List>
            </Card>
        </Grid>
    )
}

export default Exercises