import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {

    const { product, setProduct } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then(res => setProduct(res.data));
    }, [])

    const removeFromList = (id) => {
        alert(`Are you sure you want to delete? `)
        setProduct(product.filter(oneProduct=>oneProduct._id !== id))
    }

    return (
        <div>
            {
                product.map((product, index) => {
                    return <div key={index}>
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                                <br/>
                                <br/>
                                <Link to={`/products/edit/${product._id}`}>Edit</Link>
                                <DeleteButton id={product._id} successCallback={()=>removeFromList(product._id)}/>
                                <p>___________________________</p>
                            </div>
                })
            }
        </div>
    )
}
export default ProductList;