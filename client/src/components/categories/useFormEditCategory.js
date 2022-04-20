import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const useFormEditCategory = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
        getCategoryName();
    }, [BASE_URL])

    const getCategories = async () => {
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
    }

    const getCategoryName = async () => {
        try {
            const response = await fetch(`${BASE_URL}/categories/${id}`)
            return response.json()
                .then(data => {
                    setCategoryName(data[id].category_name)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const initialValues = {
        category_name: categoryName,
    };

    const validationSchema = Yup.object().shape({
        category_name: Yup.string().required("Category field is required!").min(3, "Category should be atleast 3 characters!").max(20, "Name is too long, maximum is 20 characters!")
            .notOneOf(categories, 'Category with this name already exists!')
    });

    const onSubmit = (data) => {
        fetch(`${BASE_URL}/categories/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/categories')
        })
    }

    return { initialValues, validationSchema, error, isLoading, onSubmit }
}

export default useFormEditCategory