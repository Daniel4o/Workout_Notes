import { Formik, Form } from "formik";
import { TextField, Grid, MenuItem, Button, FormControl, Card } from '@mui/material';
import useFormAddWorkout from './useFormAddWorkout';

const AddWorkout = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit, userNames, exerciseNames, inputFields, handleChangeInput, handleAddClick, handleRemoveClick } = useFormAddWorkout(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }
    
    return (
        <Grid className='createPageWorkout'>
            <Card className='workoutCard' >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className='formContainerWorkout'  >
                                <h2 >Add Workout</h2>
                                    <FormControl >
                                        <TextField 
                                            select
                                            label=" User"
                                            id="user"
                                            name="user"
                                            variant="standard"
                                            value={values.name}
                                            onChange={handleChange}
                                            error={touched.user && Boolean(errors.user)}
                                            helperText={touched.user && errors.user}
                                        >
                                            {userNames.map((id) =>
                                                <MenuItem value={id}>{id}</MenuItem>
                                                )}
                                        </TextField >
                                                <TextField
                                                    sx={{mt:1}} 
                                                    type='date'
                                                    id="date"
                                                    name="date"
                                                    variant="standard"
                                                    value={values.date}
                                                    onChange={handleChange}
                                                    error={touched.date && Boolean(errors.date)}
                                                    helperText={touched.date && errors.date}
                                                />
                                        {inputFields.map((inputField, index) => (
                                            <Grid container direction='column' >
                                                <TextField 
                                                    select
                                                    label="Select Exercise"
                                                    id="exercise"
                                                    name="exercise"
                                                    variant="standard"
                                                    value={inputField.exercise}
                                                    onChange={handleChangeInput(inputField.id)}

                                                >
                                                    {exerciseNames.map((id) =>
                                                        <MenuItem value={id}>{id}</MenuItem>
                                                    )}
                                                </TextField>
                                                <TextField
                                                    type='number'
                                                    label="Select sets"
                                                    id="sets"
                                                    name="sets"
                                                    variant="standard"
                                                    value={inputField.sets}
                                                    onChange={handleChangeInput(inputField.id)}
                                                />
                                                <TextField
                                                    type='number'
                                                    label="Select reps"
                                                    id="reps"
                                                    name="reps"
                                                    variant="standard"
                                                    value={inputField.reps}
                                                    onChange={handleChangeInput(inputField.id)}
                                                />
                                                <TextField
                                                    type='number'
                                                    label="Select weight"
                                                    id="weight"
                                                    name="weight"
                                                    variant="standard"
                                                    value={inputField.weight}
                                                    onChange={handleChangeInput(inputField.id)}
                                                />
                                                <Button id='buttonAdd' variant='contained' color='success' onClick={handleAddClick}>Add Exercise</Button>
                                                <Button sx={{mb:2}} variant='outlined' onClick={() => handleRemoveClick(inputField.id)}>Remove Exercise</Button>
                                            </Grid>

                                        ))}
                                    </FormControl>
                                    <Button variant="contained" type="submit" sx={{ mt: 4 }}>Submit</Button>
                                    <Button variant="contained" color="secondary" href={('/workouts')}>Cancel</Button>
                            </Form>
                        )}
                    </Formik>
            </Card>
        </Grid>
    )
}

export default AddWorkout