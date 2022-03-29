import { useState, useEffect } from "react";

const useFormExercises = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [deletedCategories, setDeletedCategories] = useState([]);

    useEffect(async () => {
        getCategories();
        getDeletedCategoryNames();
    }, [BASE_URL])

    const getDeletedCategoryNames = async () => {
        try {
            const response = await fetch(`${BASE_URL}/exercises`)
            return response.json()
                .then(data => {
                    setDeletedCategories(data.deletedCategories)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const getCategories = async () => {
        try {
            const response = await fetch(`${BASE_URL}/categories`)
            return response.json()
                .then(data => {
                    setCategories(data);
                    setError(null)
                    setIsLoading(false)
                })

        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    return {  deletedCategories, error, isLoading, categories }

}


export default useFormExercises