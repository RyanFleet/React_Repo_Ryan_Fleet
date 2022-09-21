
import React from 'react'
import { useState }from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {

    
    const [id,setId] = useState('')
    const nav = useNavigate()
    const [selectCategory, setSelectCategory] = useState('')


    const Submit = e =>{
        e.preventDefault()
        console.log(id)
        nav(`/${selectCategory}/${id}`)
    }


    return (
        <>
            <form onSubmit={Submit}>
                <label>
                    Search For: 
                    <select  onChange={(e) => setSelectCategory(e.target.value)} >
                        <option value=''>-----</option>
                        <option value='people'>People</option>
                        <option value='planets'>Planet</option>
                    </select>
                </label>
                <label>
                    ID: (planets 1-60 - people 1-16)
                    <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <input type='submit' value='Search'/>
            </form>
        </>
    )
}

export default Form