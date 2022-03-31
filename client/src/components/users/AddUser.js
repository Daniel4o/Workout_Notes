import { Formik, Form } from "formik";
import { TextField, Grid, Button  } from '@mui/material';
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
        <Grid container sx={{ m: 8 }}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
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
                            <TextField
                                type="date"
                                name="date"
                                id="date"
                                value={values.date}
                                onChange={handleChange}
                                error={touched.date && Boolean(errors.date)}
                                helperText={touched.date && errors.date}

                            />
                            <Button color="primary" variant="contained" type="submit">Submit</Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default AddUser