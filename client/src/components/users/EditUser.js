import { Formik, Form } from "formik";
import { TextField, Grid, Button, Card,  FormControl, LinearProgress } from '@mui/material';
import useFormEditUser from './useFormEditUser';

const EditUser = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit } = useFormEditUser(submitForm)

    if (isLoading) {
        return (<LinearProgress color="secondary" />)
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <Grid className='createPage'>
            <Card >
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className='formContainer'>
                            <h1 >Edit User</h1>
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
                            <Button color="secondary" variant="contained" href={`/users/${values.id}`}>Cancel</Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Grid>
    );
}

export default EditUser