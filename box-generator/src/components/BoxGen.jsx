import { useState } from "react";

const BoxGen = (props) => {
    
    const [box, setBox] = useState('')
    
    const {boxList, setBoxList} = props;


    const submit = (e) => {
        e.preventDefault();
        setBoxList([ ...boxList, box])
        props.color(box)
    }

    return (
        <form onSubmit={ submit }>
            <h1>Welcome To The Box Generator</h1>
            <p style={{
                margin: '20px',
                borderBottom: '1px solid',
                width: '200px'
            }}>Color: </p>
            <input 
                onChange={ (e) => setBox(e.target.value) }
                value={ box }
                type="color"
            ></input>
            <input type="submit" value="Add Color" />
        </form>
    )
}

export default BoxGen

