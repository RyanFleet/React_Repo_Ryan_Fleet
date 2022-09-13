import React from 'react'


const ColorDisplay = (props) => {

    const {boxList} = props;

    return (
        <>
        {
            boxList.map((color, index) => (
                <div key={index} style={{
                    display: 'inline-block',
                    padding: '12px 15px',
                    margin: '10px',
                    width: '50px',
                    height: '50px',
                    color: color,
                    background: color,
                    border: 'none'
                }}> </div>
            ))
        }
        </>
    )
}

export default ColorDisplay