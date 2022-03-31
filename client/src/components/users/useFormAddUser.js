import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useFormEditUser = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    const [users, setUsers] = useState([]);


    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/users`)
            return response.json()
                .then(data => {
                    const user = data.map(users => users.name).flat();
                    setUsers(user)
                    setError(null)
                    setIsLoading(false)
                })
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [BASE_URL]);




    const initialValues = {
        name: "",
        age: "",
        height: "",
        weight: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required!").min(3, "Name should be atleast 3 characters!").max(20, "Maximum characters for name are 20!")
            .notOneOf(users, 'User with this name already exists!'),
        age: Yup.number("Age is a number value!").required("Age is required!").min(10, "You are too young for, age minimum is 10!").max(100, "Invalid age!"),
        height: Yup.number("Height is a number value!").required("Height is required!").min(130, "Height minimum is 130!").max(250, "Maximum height is 250!"),
        weight: Yup.number("Weight is a number value!").required("Weight is required!").min(40, "Weight minimum is 40!").max(250, "Maximum weight is 200!"),
    });

    const onSubmit = (data) => {
        fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/users')
        })
    }

    return { initialValues, validationSchema, onSubmit, error, isLoading }
}

export default useFormEditUser