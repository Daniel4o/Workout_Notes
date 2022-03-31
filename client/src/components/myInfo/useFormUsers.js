import { useState, useEffect } from 'react';

const useFormUsers = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/users`)
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

export default useFormUsers