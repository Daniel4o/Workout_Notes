import { useState, useEffect } from 'react';

const useFormUsers = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/users`)
            return response.json()
                .then(data => {
                    setUsers(data)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [BASE_URL]);

    const deleteUser = async (id) => {
        try {
            await fetch(`${BASE_URL}/users/${id}`, {
                method: "DELETE",
            }).then(response => {
                setUsers(users.filter(user => user.id !== id))
                return response.json()
            })
        } catch (error) {
            setError(error)
        }
    }

    return { users, error, deleteUser, isLoading}
}

export default useFormUsers