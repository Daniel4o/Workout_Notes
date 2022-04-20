import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const useFormEditWorkout = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [workout, setWorkout] = useState([]);
    

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

 const [input, setInput] = useState([])
 
 
   const currWorkoutVolumeId = workout.map(volume=>volume['workout_volume.id'])
   const currExerciseId = workout.map(volume=>volume['workout_volume.exercise_id'])
   const currExerciseNames  =exercises.filter(exercise =>  currExerciseId.some(id => id == exercise.id)).map(exerciseNames => exerciseNames.exercise_name)
    const sets = workout.map(volume=>volume['workout_volume.id'])
   const reps = workout.map(volume =>volume['workout_volume.reps']) 
    const weight = workout.map(volume=>volume['workout_volume.weight'])

    const [inputFields, setInputFields] = useState([])
    var inputs =[];
    for(var i =0; i<exerciseNames.length; i++) {
        inputs.push({id: currWorkoutVolumeId[i], exercise: currExerciseNames[i], sets: sets[i], reps: reps[i], weight: weight[i]})
    }
    console.log(inputs)
    setInputFields(inputs)
    console.log(inputFields)
    /*  const a=[...Array(exerciseNames.length).fill(0).map(exercise=>({
         id: "", exercise:"",sets:"",reps:"",weight:"" 
     }))] */
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

const userName = workout.map(currWorkout=>users.find(name=>name.id === currWorkout.user_id).name)

const initialValues = {
        user: userName,
        date: workout.date || '',
    };

    const validationSchema = Yup.object().shape({
        user: Yup.string().required("User is required!"),
        date: Yup.date().required("Date is required!")
    });

    const onSubmit = (data) => {
        try {
            data.user_id = users.find(user => user.name === data.user).id

            fetch(`${BASE_URL}/workouts`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                let requests = [];
                
                const submittedExercises = inputFields.map(exercise => exercise.exercise.split(','))
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