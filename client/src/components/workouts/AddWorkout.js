import { Formik, Form } from "formik";
import { TextField, Grid, Select, MenuItem, Button, FormControl, InputLabel, FormGroup, Typography, Card } from '@mui/material';
import useFormAddWorkout from './useFormAddWorkout';
import {useState} from 'react';

const AddWorkout = (submitForm) => {
    const { initialValues, validationSchema, error, isLoading, onSubmit, userNames, exerciseNames } = useFormAddWorkout(submitForm)
    const [exercises, setExercises]= useState([]);
    const a = exerciseNames.map(exercise=>(exercise))
    const [inputFields, setInputFields] = useState([{
         exercise: ""
    }])
    const handleChangeInput= (id) => (event) => {
        const {value} = event.target;
        setInputFields((list) =>
        list.map((el) => 
        el.exercise === id 
        ? {
            ...el,
            [event.target.name] : value
        }
        : el
        )
        )
    }

    const handleAddClick = () => {
        setInputFields([
          ...inputFields,
          { exercise: "" }
        ]);
      };

      const handleRemoveClick = (id) => {
          const values =[...inputFields];
          values.splice(id,1);
          setInputFields(values)
      };

    

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }
    
    return (
        <Grid container sx={{ m: 10 }} className='content'>
            <Card sx={{ maxWidth: 1000 }}>
                <Grid sx={{ m: 16 }} >
                    <Typography variant='h4' sx={{ mb: 4 }} align='center'>Add Workout</Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} style={{ width: 300 }} >
                                <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
                                    <FormControl variant="standard" fullWidth>
                                        <TextField
                                            select
                                            label=" User"
                                            id="user"
                                            name="user"
                                            variant="standard"
                                            value={values.user}
                                            onChange={handleChange}
                                            error={touched.user && Boolean(errors.user)}
                                            helperText={touched.user && errors.user}
                                            >
                                            {userNames.map((id) =>
                                                <MenuItem value={id}>{id}</MenuItem>
                                                )}
                                        </TextField>
                                                {inputFields.map((inputField, index) => (
                                        <div>
                                                    <TextField
                                                    select
                                                    label="Select Exercise"
                                                    id="exercise"
                                                    name="exercise"
                                                    variant="standard"
                                                    value={inputField.exercise}
                                                    onChange={handleChangeInput(inputField.exercise)}
                                                    
                                                    >
                                        {exerciseNames.map((id) =>
                                            <MenuItem value={id}>{id}</MenuItem>
                                        )}
                                        </TextField>
                                            <Button onClick={() =>handleAddClick(inputField.exercise)}>Add Exercise</Button>
                                           <Button onClick={() => handleRemoveClick(inputField.exercise)}>Remove Exercise</Button>
                                           </div> 
                                            ))}
                                            <TextField
                                                type='date'
                                                id="date"
                                                name="date"
                                                variant="standard"
                                                value={values.date}
                                                onChange={handleChange}
                                                error={touched.date && Boolean(errors.date)}
                                                helperText={touched.date && errors.date}
                                            /> 
                                    </FormControl>
                                    <Button color="primary" variant="contained" type="submit" sx={{ mt: 4 }}>Submit</Button>
                                    <Button color="secondary" variant="contained" href={('/exercises')}>Cancel</Button>
                                </Grid>
                            </Form>
                        )}

                    </Formik >
            
                </Grid >
            </Card>
            </Grid>
    )
}

export default AddWorkout