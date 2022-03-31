import { Link } from 'react-router-dom';
import { Formik, Form } from "formik";
import { TextField, Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import useFormEditExercise from './useFormEditExercise';

const EditExercise = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit, categoryNames } = useFormEditExercise(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid container sx={{ m: 8 }}>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
                            <TextField
                                label=" Exercise name"
                                id="exercise_name"
                                name="exercise_name"
                                variant="standard"
                                value={values.exercise_name}
                                onChange={handleChange}
                                error={touched.exercise_name && Boolean(errors.exercise_name)}
                                helpertext={touched.exercise_name && errors.exercise_name}
                            />
                        <FormControl variant="standard" fullWidth>
                        <InputLabel>Category</InputLabel>
                            <Select
                            label= "Category"
                            id="category_name"
                            name= "category_name"
                            variant="standard"
                            value={values.category_name}
                            onChange={handleChange}
                            error={touched.category_name && Boolean(errors.category_name)}
                            helpertext={touched.category_name && errors.category_name}
                            >
                                {categoryNames.map((id) =>
                                <MenuItem value={id}>{id}</MenuItem>
                                )}
                            </Select>
                                </FormControl>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default EditExercise