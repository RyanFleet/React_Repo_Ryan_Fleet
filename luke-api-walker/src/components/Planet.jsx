import React from 'react'
import { useState }from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = (props) => {
    const { id } = useParams();
    const [responseData, setResponseData] = useState([])

        // planet api
        useEffect(()=>{
            axios
                .get(`https://swapi.dev/api/planets/${id}`)
                .then(response => setResponseData(response.data))
                .catch((err) => console.log(err));
        }, [props])

    return (
        <div>
            <>
                {
                    <div key={id}>
                        <h1>{responseData.name}</h1>
                        <p>_____________________________</p>
                        <p>Climate: {responseData.climate}</p>
                        <p>Terrain: {responseData.terrain}</p>
                        <p>Surface Water: {responseData.surface_water}</p>
                        <p>Population: {responseData.population}</p>
                    </div>
                }
            </>
        </div>
    )
}

export default Planet