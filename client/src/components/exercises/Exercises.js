import useFormExercises from "./useFormExercises";
import { List, ListItem, ListItemText, Button, IconButton, Grid, Box, Checkbox, FormControlLabel, FormGroup, Card } from '@mui/material';
import { Delete, Folder, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const Exercises = () => {
    const { categories, deletedCategories, error, isLoading, exercises } = useFormExercises();
    const [showCategories, setShowCategories] = useState(false);
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Card sx={{ maxWidth: 1000, m:8 }}>
        <Grid container>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={showCategories}
                            onChange={(event) => setShowCategories(event.target.checked)}
                        />
                    }
                    label="Show Categories"
                />
                <Button variant='fab' sx={{ml:30}} onClick={() => navigate('/exercises/add')}>
                    <Add />
                </Button>
            </FormGroup>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <List>
                    {exercises.map(exercise => (
                        <ListItem
                            key={exercise.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <Delete />
                                </IconButton>
                            }>
                            <Button onClick={() => navigate(`/exercises/edit/${exercise.id}`)}>
                                <Folder />
                            </Button>
                            <ListItemText
                                primary={exercise.exercise_name}
                                secondary={showCategories ? exercise["exerciseCategories.category_name"] : null}
                            />
                        </ListItem>
                    ))}
                </List>
                </Grid>
                </Grid>
            </Grid>
            </Card>
    )
}

export default Exercises