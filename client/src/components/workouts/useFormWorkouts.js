import { useState, useEffect } from 'react';

const useFormWorkouts = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    const [workouts, setWorkouts] = useState([]);
    const [workoutVolume, setWorkoutVolume] = useState([]);
    const [deletedCategories, setDeletedCategories] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(async () => {
        getWorkouts();
        getWorkoutVolume();
        getExerciseNames();
    }, [BASE_URL])

    const getWorkouts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/workouts`)
            return response.json()
                .then(data => {
                    setWorkoutVolume(data.workoutVolume)
                    setWorkouts(data.userWorkouts)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const getWorkoutVolume = async () => {
        try {
            const response = await fetch(`${BASE_URL}/workout-volume`)
            return response.json()
                .then(data => {
                    setWorkoutVolume(data)
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
                    setExercises(data.categoryExists)
                    setDeletedCategories(data.deletedCategories)
                    setError(null)
                    setIsLoading(false)
                })
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }
        
    
   
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return { workouts, workoutVolume, error, isLoading, open, setOpen, handleClose, handleClickOpen }
}

export default useFormWorkouts