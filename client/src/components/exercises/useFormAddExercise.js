import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useFormAddExercise = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getExercises();
        getCategoryNames();
    }, [BASE_URL]);

    const getExercises = async () => {
        try {
            const response = await fetch(`${BASE_URL}/exercises`)
            return response.json()
                .then(data => {
                    const exercise = data.exercises.map(exercises => exercises.exercise_name).flat();
                    setExercises(exercise)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const getCategoryNames = async () => {
        try {
            const response = await fetch(`${BASE_URL}/categories`)
            return response.json()
                .then(data => {
                    setCategories(data)
                    const allCategoryNames = data.map(category => category.category_name).flat();
                    setCategoryNames(allCategoryNames)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const initialValues = {
        exercise_name: "",
        category_name: ""
    };

    const validationSchema = Yup.object().shape({
        exercise_name: Yup.string().required("Exercise field is required!").min(3, "Team name should be atleast 3 characters!").max(20, "Name is too long, maximum is 20 characters!")
            .notOneOf(exercises, 'Exercise with this name exists!'),
        category_name: Yup.string().required("Category is required!")
    });

    const onSubmit = (data) => {
        data.category_id = categories.find(category => category.category_name === data.category_name).id
        fetch(`${BASE_URL}/exercises`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/exercises')
        })
    }

    return { initialValues, validationSchema, error, isLoading, onSubmit, categoryNames }
}

export default useFormAddExercise