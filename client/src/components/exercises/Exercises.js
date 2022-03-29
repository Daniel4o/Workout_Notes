import useFormExercises from "./useFormExercises";
import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';

const Exercises = () => {
    const { categories, deletedCategories, error, isLoading } = useFormExercises()

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
        >
            {categories.map((exercise) => (
                <li key={exercise['categoryExercises.exercise_name']}>
                    <ul>
                        <ListSubheader>{exercise.category_name}</ListSubheader>
                            <ListItem key={exercise['categoryExercises.exercise_name']}>
                                <ListItemText primary={exercise['categoryExercises.exercise_name']} />
                            </ListItem>
                    </ul>
                </li>
            ))}
        </List>
    )
}

export default Exercises