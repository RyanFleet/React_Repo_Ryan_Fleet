import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {

    const { product, setProduct, removeFromList } = props;

    const deleteProduct=(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            removeFromList(id)
        })
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/allProducts")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {
                product.map((product, index) => {
                    return <div key={index}>
                                <Link to={`/products/${product._id}`}>{product.title}'s </Link>
                                <br/>
                                <Link to={`/products/edit/${product._id}`}>Edit</Link>
                                <br/>
                                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                            <p>___________________________</p>
                            </div>
                })
            }
        </div>
    )
}
export default ProductList;

