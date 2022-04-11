import { useState, useEffect } from 'react';

const useFormWorkouts = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [workouts, setWorkouts] = useState([]);
    const [error, setError] = useState(null)

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/workouts`)
            return response.json()
                .then(data => {
                    setWorkouts(data.userWorkouts)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [BASE_URL]);


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

    return { workouts, error, deleteWorkout, isLoading }
}

export default useFormWorkouts