import { Link } from 'react-router-dom';
import { Formik, Form } from "formik";
import { TextField, Grid, Button } from '@mui/material';
import useFormEditExercise from './useFormEditExercise';

const EditExercise = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit } = useFormEditExercise(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid item xs={8}>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div style={{ minHeight: "100%" }}></div>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
                            <TextField
                                label=" Category name"
                                id="category_name"
                                name="category_name"
                                variant="standard"
                                value={values.category_name}
                                onChange={handleChange}
                                error={touched.category_name && Boolean(errors.category_name)}
                                helperText={touched.category_name && errors.category_name}
                            />
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default EditExercise