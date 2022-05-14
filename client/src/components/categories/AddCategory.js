import { Link } from 'react-router-dom';
import { Formik, Form } from "formik";
import { TextField, Grid, Button, Card, Typography } from '@mui/material';
import useFormAddCategory from './useFormAddCategory';

const AddCategory = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit } = useFormAddCategory(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid className='createPage'>
            <Card>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className='formContainer'>
                        <h2>Add Category</h2>
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
                        <Button color="primary" variant="contained" type="submit" sx={{ mt: 4 }}>Submit</Button>
                        <Button color="secondary" variant="contained" href={('/categories')}>Cancel</Button>
                    </Form>
                )}
            </Formik>
            </Card>
        </Grid>
    )
}

export default AddCategory