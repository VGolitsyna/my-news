import {useState} from 'react';

const useGetRequest = (url) => {
    const [error, setError] = useState (false);
    const [loading, setLoading] = useState(false);

    const sendHttpRequest = async(manageData) => {
        setLoading(true);
        try{
            let response = await fetch(url);
        
            if (!response.ok){
                throw new Error('Произошла ошибка');
            }
        
            const data = await response.json();
            setLoading(false);
            manageData(data);

        } catch (err){
            setLoading(false);
            setError(true);
        }
    }

    return {
        loading,
        error,
        sendHttpRequest
    }
}

export default useGetRequest;