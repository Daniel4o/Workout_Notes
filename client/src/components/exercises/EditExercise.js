import { Formik, Form } from "formik";
import { TextField, Grid, Button, MenuItem, FormControl, Card, LinearProgress } from '@mui/material';
import useFormEditExercise from './useFormEditExercise';

const EditExercise = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit, categoryNames } = useFormEditExercise(submitForm)

    if (isLoading) {
        return (<LinearProgress color="secondary" />)
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <Grid className='createPage'>
            <Card>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className='formContainer'>
                            <h1 >Edit Exercise</h1>
                            <FormControl >
                                <TextField
                                    label=" Exercise name"
                                    id="exercise_name"
                                    name="exercise_name"
                                    variant="standard"
                                    value={values.exercise_name}
                                    onChange={handleChange}
                                    error={touched.exercise_name && Boolean(errors.exercise_name)}
                                    helperText={touched.exercise_name && errors.exercise_name}
                                />
                                <TextField
                                    select
                                    label="Select category"
                                    id="category_name"
                                    name="category_name"
                                    variant="standard"
                                    value={values.category_name}
                                    onChange={handleChange}
                                    error={touched.category_name && Boolean(errors.category_name)}
                                    helperText={touched.category_name && errors.category_name}
                                >
                                    {categoryNames.map((id) =>
                                        <MenuItem value={id}>{id}</MenuItem>
                                    )}
                                </TextField>
                            </FormControl>
                            <Button color="primary" variant="contained" type="submit" sx={{ mt: 4 }}>Submit</Button>
                            <Button color="secondary" variant="contained" href={'/exercises'}>Cancel</Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Grid>
    )
}

export default EditExercise