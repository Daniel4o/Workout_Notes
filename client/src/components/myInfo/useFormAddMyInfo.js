import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useFormAddMyInfo = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());



    const initialValues = {
        name: "",
        age: "",
        height: "",
        weight: "",
        date: new Date(),
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required!").min(3, "Name should be atleast 3 characters!").max(20, "Maximum characters for name are 20!"),
        age: Yup.number("Age is a number value!").required("Age is required!").min(10, "You are too young for, age minimum is 10!").max(100, "Invalid age!"),
        height: Yup.number("Height is a number value!").required("Height is required!").min(130, "Height minimum is 130!").max(250, "Maximum height is 250!"),
        weight: Yup.number("Weight is a number value!").required("Weight is required!").min(40, "Weight minimum is 40!").max(250, "Maximum weight is 200!"),
        date: Yup.date().required("Date is required!"),
    });

    const onSubmit = (data) => {
        fetch(`${BASE_URL}/my-info`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            navigate('/my-info/add')
        })
    }

    return { initialValues, validationSchema, onSubmit, setDate }
}

export default useFormAddMyInfo