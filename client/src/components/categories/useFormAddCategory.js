import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useFormAddCategory = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/categories`)
            return response.json()
                .then(data => {
                    const category = data.map(categories => categories.category_name).flat();
                    setCategories(category)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [BASE_URL]);

    const initialValues = {
        category_name: "",
    };

    const validationSchema = Yup.object().shape({
        category_name: Yup.string().required("Category field is required!").min(3, "Team name should be atleast 3 characters!").max(20, "Name is too long, maximum is 20 characters!")
            .notOneOf(categories, 'Category with this name already exists!')
    });

    const onSubmit = (data) => {
        fetch(`${BASE_URL}/categories`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/categories')
        })
    }

    return { initialValues, validationSchema, error, isLoading, onSubmit }
}

export default useFormAddCategory