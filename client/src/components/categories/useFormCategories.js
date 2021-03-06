import { useState, useEffect } from 'react';

const useFormCategories = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
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
    }, [BASE_URL]);

    const handleClick = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const deleteCategory = async (id) => {
        try {
            await fetch(`${BASE_URL}/categories/${id}`, {
                method: "DELETE",
            }).then(response => {
                setCategories(categories.filter(cateogry => cateogry.id !== id))
                return response.json()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return { error, isLoading, categories, expanded, handleClick, deleteCategory }
}

export default useFormCategories