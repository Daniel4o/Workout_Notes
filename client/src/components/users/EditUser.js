import { Link } from 'react-router-dom';
import { Formik, Form } from "formik";
import { TextField, Grid, Button, Card, Typography, FormControl } from '@mui/material';
import useFormEditUser from './useFormEditUser';

const EditUser = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit } = useFormEditUser(submitForm)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid container sx={{ m: 10, ml: 20 }} className='content'>
            <Card sx={{ maxWidth: 1000 }}>
                <Grid sx={{ m: 10 }}>
                    <Typography variant='h4' sx={{ mb: 4 }} align='center'>Edit User</Typography>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} style={{width:275}}>
                                <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
                                    <FormControl variant="standard" fullWidth>
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
                                    <Button color="secondary" variant="contained" href={`/users/${values.id}`}>Cancel</Button>                    </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Card>
        </Grid>
    );
}

export default EditUser