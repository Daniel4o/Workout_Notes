import { Formik, Form } from "formik";
import { TextField, Grid, Select, MenuItem, Button, FormControl, InputLabel, FormGroup, Typography, Card } from '@mui/material';
import useFormAddExercise from './useFormAddExercise';

const AddExercise = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit, categoryNames } = useFormAddExercise(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid container sx={{ m: 10}} className='content'>
            <Card sx={{ maxWidth: 1000 }}>
                <Grid sx={{ m: 16 }} >
                    <Typography variant='h4' sx={{ mb: 4 }} align='center'>Add Exercise</Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} style={{width:300}} >
                                <Grid container  direction="column" justifyContent="space-evenly" alignItems="center" >
                                    <FormControl variant="standard" fullWidth>
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
                                    </FormControl>
                                    <FormControl variant='standard' fullWidth>
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
                                    <Button color="primary" variant="contained"  type="submit" sx={{ mt: 4 }}>Submit</Button>
                                    <Button color="secondary" variant="contained"  href={('/exercises')}>Cancel</Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik >
                </Grid >
            </Card>
        </Grid>
    )
}

export default AddExercise