import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const useFormEditWorkout = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [userName, setUserName] = useState([]);
    const [workout, setWorkout] = useState([]);
    const [workoutVolumeId , setWorkoutVolumeId] = useState([]);
    const [sets, setSets] = useState([]);
    const [reps, setReps] = useState([]);
    const [weight, setWeight] = useState([]);
    const [exerciseId, setExerciseId] = useState([]);

    const [exercises, setExercises] = useState([]);
    const [exerciseNames, setExerciseNames] = useState([]);
    const [users, setUsers] = useState([]);
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        getWorkoutById();
        getExercises();
        getUserNames();
    }, [BASE_URL]);

    const getWorkoutById = async () => {
        try {
            const response = await fetch(`${BASE_URL}/workouts/${id}`)
            return response.json()
                .then(data => {
                   setWorkout(data)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const getUserNames = async () => {
        try {
            const response = await fetch(`${BASE_URL}/users`)
            return response.json()
                .then(data => {
                    setUsers(data)
                    const user = data.filter(user=> user.id === data.user_id)
                    setUserName(user.map(user=>user.name).toString())
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

   const workoutVolume = workout.map(volume=>{
        setWorkoutVolumeId(volume['workoutVolume.id'])
    setExerciseId(volume['workoutVolume.exercise_id'])
    setSets(volume['workoutVolume.sets'])
    setWeight(volume['workoutVolume.weights'])
    setReps(volume['workoutVolume.reps'])
})

const exerciseName =exerciseId.forEach((element,index) => {
    exerciseId[index] = exercises.find(exercise=>exercise.id === exerciseId[index]).exercise_name
})
console.log(workoutVolume)
const [inputFields, setInputFields] = useState([
    { id: workoutVolumeId[0], exercise: exerciseName[0], sets: sets[0], reps: reps[0], weight: weight[0]},
    { id: workoutVolumeId[1], exercise: exerciseName[1], sets: sets[1], reps: reps[1], weight: weight[1]},
    { id: workoutVolumeId[2], exercise: exerciseName[2], sets: sets[2], reps: reps[2], weight: weight[2]},
    { id: workoutVolumeId[3], exercise: exerciseName[3], sets: sets[3], reps: reps[3], weight: weight[3]},
    { id: workoutVolumeId[4], exercise: exerciseName[4], sets: sets[4], reps: reps[4], weight: weight[4]},
    { id: workoutVolumeId[5], exercise: exerciseName[5], sets: sets[5], reps: reps[5], weight: weight[5]},
    { id: workoutVolumeId[6], exercise: exerciseName[6], sets: sets[6], reps: reps[6], weight: weight[6]},
    { id: workoutVolumeId[7], exercise: exerciseName[7], sets: sets[7], reps: reps[7], weight: weight[7]}
])
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
        user: userName,
        date: workout.date || '',
        exercise_one: workout.exercise_one || '',
        exercise_two: workout.exercise_two || '',
        exercise_three: workout.exercise_three || '',
        exercise_four: workout.exercise_four || '',
        exercise_five: workout.exercise_five || '',
        exercise_six: workout.exercise_six || '',
        exercise_seven: workout.exercise_seven || '',
        exercise_eight: workout.exercise_eight || '',
    };

    const validationSchema = Yup.object().shape({
        user: Yup.string().required("User is required!"),
        date: Yup.date().required("Date is required!")

    });

    const onSubmit = (data) => {
        try {

            const submittedExercises = inputFields.map(exercise => exercise.exercise.split(','))

            data.user_id = users.find(user => user.name === data.user).id
            data.exercise_one = exercises.find(exercise => exercise.exercise_name === submittedExercises[0].toString()).id
            if (submittedExercises[1]) {
                data.exercise_two = exercises.find(exercise => exercise.exercise_name === submittedExercises[1].toString()).id

                if (submittedExercises[2]) {
                    data.exercise_three = exercises.find(exercise => exercise.exercise_name === submittedExercises[2].toString()).id
                }
                if (submittedExercises[3]) {
                    data.exercise_four = exercises.find(exercise => exercise.exercise_name === submittedExercises[3].toString()).id
                }
                if (submittedExercises[4]) {
                    data.exercise_five = exercises.find(exercise => exercise.exercise_name === submittedExercises[4].toString()).id
                }
                if (submittedExercises[5]) {
                    data.exercise_six = exercises.find(exercise => exercise.exercise_name === submittedExercises[5].toString()).id
                }
                if (submittedExercises[6]) {
                    data.exercise_seven = exercises.find(exercise => exercise.exercise_name === submittedExercises[6].toString()).id
                }
                if (submittedExercises[7]) {
                    data.exercise_eight = exercises.find(exercise => exercise.exercise_name === submittedExercises[7].toString()).id
                }
            }

            fetch(`${BASE_URL}/workouts`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                let requests = [];

                const submittedSets = inputFields.map(exercise => exercise.sets.split(','))
                const submittedReps = inputFields.map(exercise => exercise.reps.split(','))
                const submittedWeight = inputFields.map(exercise => exercise.weight.split(','))

                for (var i = 0; i < inputFields.length; i++) {

                    const workoutVolume = {
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
                }
                Promise.all(requests).then(() => {
                    console.log('done')
                })
            })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    return { initialValues, validationSchema, onSubmit, userNames, exerciseNames, error, isLoading, inputFields, handleChangeInput, handleAddClick, handleRemoveClick }

}
export default useFormEditWorkout