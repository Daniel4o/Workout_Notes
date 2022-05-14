import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const useFormWorkoutById = () => {
const BASE_URL = process.env.REACT_APP_URL

const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const navigate = useNavigate();
const {id} = useParams();

const [open, setOpen] = useState(false);
const [exercises, setExercises] = useState([]);
const [workoutById, setWorkoutById] = useState([]);

useEffect(async () => {
    getWorkoutById();
    getExerciseNames();
}, [BASE_URL])

const getWorkoutById = async () => {
    try {
        const response = await fetch(`${BASE_URL}/workouts/${id}`)
        return response.json()
        .then(data=>{
            setWorkoutById(data)
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
                setExercises(data.exercises)
                setError(null)
                setIsLoading(false)
            })
    } catch (error) {
        setError(error)
        setIsLoading(false)
    }
}
let date = workoutById.map(workout=>workout.date)
console.log(date.splice(0,1)[0])
const workoutExercises = workoutById.map(workout=>({...workout,...exercises.find(exercise=> exercise.id === workout['workout_volume.exercise_id'])}))

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
}
const deleteWorkout = async (id) => {
    try {
        await fetch(`${BASE_URL}/workouts/${id}`, {
            method: "DELETE",
        }).then(response => {
            setOpen(false)
            navigate('/workouts')
        })
    } catch (error) {
        setError(error)
    }
}
return {error, isLoading, workoutById, workoutExercises, date, open, handleClickOpen, handleClose, deleteWorkout }
 }

 export default useFormWorkoutById