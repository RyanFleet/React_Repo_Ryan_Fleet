import React from 'react'
import { useState }from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Results = (props) => {

    const { id } = useParams();
    const [responseData, setResponseData] = useState([])

    // people api
    useEffect(()=>{
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => setResponseData(response.data))
            .catch((err) => console.log(err));
    }, [props]);

    return (
        <div>
            <>
                {
                    <div key={id}>
                        <h1>{responseData.name}</h1>
                        <p>_____________________________</p>
                        <p>Id: {id}</p>
                        <p>Height: {responseData.height}</p>
                        <p>Hair Color: {responseData.hair_color}</p>
                        <p>Skin Color: {responseData.skin_color}</p>
                        <p>Eye Color: {responseData.eye_color}</p>
                        <p>Birth Year: {responseData.birth_year}</p>
                        <p>Gender: {responseData.gender}</p>
                        <p>Home World: {responseData.homeworld}</p>
                    </div>
                }
            </>
        </div>
    )
}

export default Results