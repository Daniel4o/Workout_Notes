import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useFormAddWorkout = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)


    const [workoutIds, setWorkoutIds] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [exerciseNames, setExerciseNames] = useState([]);
    const [users, setUsers] = useState([]);
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        getExercises();
        getUserNames();
        getWorkoutIds();
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

    const getExercises = async () => {
        try {
            const response = await fetch(`${BASE_URL}/exercises`)
            return response.json()
                .then(data => {
                    setExercises(data.exercises)
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

    const getWorkoutIds = async () => {
        try {
            const response = await fetch(`${BASE_URL}/workouts`)
            return response.json()
                .then(data => {
                    setWorkoutIds(data.workoutVolume.map(workouts => workouts.id).flat());
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const [inputFields, setInputFields] = useState([{
        id: Math.floor(Math.random() * (100000 - 1) + 1), exercise: "", sets: "", reps: "", weight: ""
    }])

    const handleChangeInput = (id) => (event) => {
        const { value } = event.target;
        setInputFields((list) =>
            list.map((el) =>
                el.id === id
                    ? {
                        ...el,
                        [event.target.name]: value
                    }
                    : el
            )
        )
    }

    const handleAddClick = () => {
        setInputFields([
            ...inputFields,
            { id: Math.floor(Math.random() * (100000 - 1) + 1), exercise: "", sets: "", reps: "", weight: "" }
        ]);
    };

    const handleRemoveClick = (id) => {
        setInputFields((list) => list.filter((el) => el.id !== id));

    };

    const initialValues = {
        user: "",
        date: "",
    };

    const validationSchema = Yup.object().shape({
        user: Yup.string().required("User is required!"),
        date: Yup.date().required("Date is required!")

    });

    const onSubmit = (data) => {
        try {
            data.id = Math.floor(Math.random() * (100000 - 1) + 1);
            while (workoutIds.some(id => id === data.id)) {
                data.id = Math.floor(Math.random() * (100000 - 1) + 1);
            }
            
            data.user_id = users.find(user => user.name === data.user).id
            
            fetch(`${BASE_URL}/workouts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                let requests = [];
                const submittedId = inputFields.map(exercise=> exercise.id)
                const submittedExercises = inputFields.map(exercise => exercise.exercise.split(','))
                const submittedSets = inputFields.map(exercise => exercise.sets.split(','))
                const submittedReps = inputFields.map(exercise => exercise.reps.split(','))
                const submittedWeight = inputFields.map(exercise => exercise.weight.split(','))

                for (var i = 0; i < inputFields.length; i++) {

                    const workoutVolume = {
                        id: submittedId[i],
                        workout_id: data.id,
                        exercise_id: exercises.find(exercise => exercise.exercise_name === submittedExercises[i].toString()).id,
                        sets: submittedSets[i],
                        reps: submittedReps[i],
                        weight: submittedWeight[i],
                    }
                    requests.push(
                        fetch(`${BASE_URL}/workout-volume`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(workoutVolume)
                        }))
                        console.log(workoutVolume)
                }
                Promise.all(requests).then(() => {
                    console.log('done')
                    navigate('/workouts')  
                })
            })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    return { initialValues, validationSchema, onSubmit, userNames, exerciseNames, error, isLoading, inputFields, handleChangeInput, handleAddClick, handleRemoveClick }
}

export default useFormAddWorkout