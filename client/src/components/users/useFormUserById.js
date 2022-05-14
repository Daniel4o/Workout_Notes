import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const useFormUserById = () => {
    const BASE_URL = process.env.REACT_APP_URL

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const {id} =useParams();
    
    const [user, setUser] = useState([]);
  

    useEffect(async () => {
        try {
            const response = await fetch(`${BASE_URL}/users/${id}`)
            return response.json()
                .then(data => {
                    data.map(user=> {
                        setUser(user)
                })
                    setError(null)
                    setIsLoading(false)
            })
            
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [BASE_URL]);
   
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const deleteUser = async (id) => {
        try {
            await fetch(`${BASE_URL}/users/${id}`, {
                method: "DELETE",
            }).then(response => {
                setUser(user.filter(user => user.id !== id))
                return response.json()
            })
        } catch (error) {
            setError(error)
        }
    }

    return { error, isLoading, user, open, handleClickOpen, handleClose, deleteUser  }
}

export default useFormUserById