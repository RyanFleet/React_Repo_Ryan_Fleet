import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {

    const { product, setProduct } = props;

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
                            <p>___________________________</p>
                            </div>
                })
            }
        </div>
    )
}
export default ProductList;

