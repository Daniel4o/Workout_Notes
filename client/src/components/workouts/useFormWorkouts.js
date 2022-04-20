import { useState, useEffect } from 'react';

const useFormWorkouts = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    const [workoutsUser, setWorkoutsUser] = useState([]);
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

    const exercise = workoutVolume.map(exercise => exercise['workout_volume.exercise_id'])
    /* function findDuplicates(arr) {
        var obj={};
        for (var i of arr) {
            if(obj[i] ==1) {
                console.log(i)
            }
            obj[i]=1;
        }
    }
    findDuplicates(exercise) */

    var mf = 1;
    var m = 0;
    var exerciseName;
    for (var i = 0; i < exercise.length; i++) {
        for (var j = i; j < exercise.length; j++) {
            if (exercise[i] == exercise[j])
                m++;
            if (mf < m) {
                mf = m;
                exerciseName = exercise[i];
            }
        }
        m = 0;
    }
    //exerciseName = exercises.find(exercise => exercise.id === exerciseName).exercise_name
    console.log(exerciseName)

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
                setWorkouts(workouts.filter(workout => workout.id !== id))
                return response.json()
            })
        } catch (error) {
            setError(error)
        }
    }

    return { workouts, exercises, workoutVolume, error, deleteWorkout, isLoading, open, handleClose, handleClickOpen }
}

export default useFormWorkouts