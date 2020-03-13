import { useState, useEffect } from 'react';
import axios from 'axios';



export const useFetchData = (url) => {
     
    const [data, setData] = useState([]);

    useEffect(() => {
         axios
            .get(url)
            .then(res => {
                console.log(res.data);
                setData(res.data);

            })
            .catch(err => console.log(err.message))
    }, [url])


return [data];


};