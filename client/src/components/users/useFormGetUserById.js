import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const useFormGetUserById = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} =useParams();
    
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/users/${id}`)
            return response.json()
                .then(data => {
                    data.map(me=> {
                    setName(me.name);
                    setAge(me.age);
                    setHeight(me.height);
                    setWeight(me.weight);
                })
                    setError(null)
                    setIsLoading(false)
            })
            
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [BASE_URL]);
   

    return { error, isLoading, name, age, weight, height }
}

export default useFormGetUserById