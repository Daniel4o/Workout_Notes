import { Formik, Form } from "formik";
import { TextField, Grid, MenuItem, Button, FormControl, Typography, Card } from '@mui/material';
import useFormEditWorkout from './useFormEditWorkout';

const EditWorkout = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit, userNames, exerciseNames, inputFields, handleChangeInput, handleAddClick, handleRemoveClick } = useFormEditWorkout(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid container sx={{ m: 10 }} className='content'>
            <Card sx={{ maxWidth: 1000 }}>
                <Grid sx={{ m: 16 }} >
                    <Typography variant='h4' sx={{ mb: 4 }} align='center'>Edit Workout</Typography>

                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} style={{ width: 300 }} >
                                <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
                                    <FormControl variant="standard" fullWidth>
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
                                        </TextField>
                                        {inputFields.map((inputField, index) => (
                                            <Grid   >
                                                <TextField fullWidth
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
                                                <div></div>
                                                <Button sx={{mb:2}} onClick={handleAddClick}>Add Exercise</Button>
                                                <Button sx={{mb:2}} onClick={() => handleRemoveClick(inputField.id)}>Remove Exercise</Button>
                                            </Grid>

                                        ))}
                                        <TextField
                                            type='date'
                                            id="date"
                                            name="date"
                                            variant="standard"
                                            value={values.date}
                                            onChange={handleChange}
                                            error={touched.date && Boolean(errors.date)}
                                            helperText={touched.date && errors.date}
                                        />
                                    </FormControl>
                                    <Button color="primary" variant="contained" type="submit" sx={{ mt: 4 }}>Submit</Button>
                                    <Button color="secondary" variant="contained" href={('/exercises')}>Cancel</Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid >
            </Card>
        </Grid>
    )
}

export default EditWorkout