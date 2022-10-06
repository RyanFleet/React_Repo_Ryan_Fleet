import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { id, successCallback, product } = props;

    const deleteProduct=()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            successCallback()
        })
        .catch(err=>console.log(err))
    }
    return (
        <button style={{
            margin:'10px'
        }} onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;