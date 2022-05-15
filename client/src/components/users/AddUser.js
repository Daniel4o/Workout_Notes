import { Formik, Form } from "formik";
import { TextField, Grid, Button, FormControl, Card, Typography } from '@mui/material';
import useFormAddUser from './useFormAddUser';

const AddUser = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit } = useFormAddUser(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid className='createPage' >
            <Card>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className='formContainer'>
                            <h2>Add User</h2>
                            <FormControl >
                                <TextField
                                    label="Name"
                                    id="name"
                                    name="name"
                                    variant="standard"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    label="Age"
                                    id="age"
                                    name="age"
                                    variant="standard"
                                    value={values.age}
                                    onChange={handleChange}
                                    error={touched.age && Boolean(errors.age)}
                                    helperText={touched.age && errors.age}
                                />
                                <TextField
                                    label="Height"
                                    id="height"
                                    name="height"
                                    variant="standard"
                                    value={values.height}
                                    onChange={handleChange}
                                    error={touched.height && Boolean(errors.height)}
                                    helperText={touched.height && errors.height}

                                />
                                <TextField
                                    label="Weight"
                                    id="Weight"
                                    name="weight"
                                    variant="standard"
                                    value={values.weight}
                                    onChange={handleChange}
                                    error={touched.weight && Boolean(errors.weight)}
                                    helperText={touched.weight && errors.weight}
                                />
                            </FormControl>
                            <Button color="primary" variant="contained" type="submit" sx={{ mt: 4 }}>Submit</Button>
                            <Button color="secondary" variant="contained" href={'/users'} sx={{ mb: 6 }}>Cancel</Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Grid>
    )
}

export default AddUser