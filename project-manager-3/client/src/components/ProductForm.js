import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {product, setProduct} = props

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProduct([...product,res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={Submit}>
            <h1>Product Manager II</h1>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" value={"Create"} />
        </form>
    )
}
export default ProductForm;