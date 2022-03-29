import { Formik, Form } from "formik";
import { TextField, Grid, Select, MenuItem, Button } from '@mui/material';
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
        <Grid item xs={8}>
            <Formik
                
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div style={{ minHeight: "100%" }}></div>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
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
                            <Select
                            label= "Category"
                            id="category_name"
                            name= "category_name"
                            variant="standard"
                            value={values.category_name}
                            onChange={handleChange}
                            error={touched.category_name && Boolean(errors.category_name)}
                            helperText={touched.category_name && errors.category_name}
                            >
                                {categoryNames.map((id) =>
                                <MenuItem value={id}>{id}</MenuItem>
                                )}
                            </Select>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default AddExercise