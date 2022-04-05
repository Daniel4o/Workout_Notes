import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useFormAddWorkout = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    const [exerciseNames, setExerciseNames] = useState([]);
    const [users, setUsers] = useState([]);
    const [userNames, setUserNames] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        getExerciseNames();
        getUserNames();
    }, [BASE_URL]);



    const getUserNames = async () => {
        try {
            const response = await fetch(`${BASE_URL}/users`)
            return response.json()
                .then(data => {
                    setUsers(data)
                    const allUserNames = data.map(user => user.name).flat();
                    setUserNames(allUserNames)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const getExerciseNames = async () => {
        try {
            const response = await fetch(`${BASE_URL}/exercises`)
            return response.json()
                .then(data => {
                    setExercises(data)
                    const allExerciseNames = data.exercises.map(exercise => exercise.exercise_name).flat();
                    setExerciseNames(allExerciseNames)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }



    const initialValues = {
        user: "",
        exercise_one: "",
       /*  exercise_two: "",
        exercise_three: "",
        exercise_four: "",
        exercise_five: "",
        exercise_six: "", */
        date: ""

    };

    const validationSchema = Yup.object().shape({
        user: Yup.string().required("User is required!"),
        exercise_one: Yup.string().required("Atleast one exercise is required!"),
        date: Yup.date().required("Date is required!")
    });

    const onSubmit = (data) => {
        console.log(data)
        data.user_id = users.find(user => user.name === data.user).id
        data.exercise_one = exercises.find(exercise => exercise.exercise_name === data.exercise_one).id
        data.exercise_two = exercises.find(exercise => exercise.exercise_name === data.exercise_two).id
        data.exercise_three = exercises.find(exercise => exercise.exercise_name === data.exercise_three).id
        data.exercise_four = exercises.find(exercise => exercise.exercise_name === data.exercise_four).id
        data.exercise_five = exercises.find(exercise => exercise.exercise_name === data.exercise_five).id
        data.exercise_six = exercises.find(exercise => exercise.exercise_name === data.exercise_six).id
       

        fetch(`${BASE_URL}/workouts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/workouts')
        })
    }


    return { initialValues, validationSchema, onSubmit, userNames, exerciseNames, error, isLoading }
}

export default useFormAddWorkout