import { Formik, Form } from "formik";
import { TextField, Card, Grid, Button, LinearProgress } from '@mui/material';
import useFormEditCategory from './useFormEditCategory';

const EditCategory = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit } = useFormEditCategory(submitForm)

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
                            <h1>Edit Category</h1>
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

export default EditCategory