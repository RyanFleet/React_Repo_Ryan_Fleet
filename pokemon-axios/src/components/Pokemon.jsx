import axios from 'axios'
import React from 'react'
import { useState }from 'react'
import { useEffect } from 'react'

const Pokemon = () => {
    const [responseData, setResponseData] = useState([])
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
        .then(response=>{setResponseData(response.data.results)})
    }, [])
    
    return (
        <div>
            <h1>All 807 Pokemon!</h1>
            {
                responseData.length > 0 && responseData.map((poki, i)=>{
                    return (<div key={i}>• {i} • {poki.name}</div>)
                })
            }</div>
    )
}

export default Pokemon