import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const {onSubmitProp, initialTitle, initialPrice, initialDescription} = props
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription)

    const Submit = (e) => {
        e.preventDefault();
        onSubmitProp({title,price,description})
    }

    return (
        <form onSubmit={Submit}>
            <h1>Product Manager II</h1>
            <p>
                <label>Title</label><br />
                <input name='title' value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input name='price' value={price} type="text" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <input name='description' value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;