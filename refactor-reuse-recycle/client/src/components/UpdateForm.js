import React from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ProductForm from './ProductForm'

const UpdateForm = (props) => {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)

    const { onSubmitProp } = props
    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
                console.log(`loaded ${id}`)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = params => {
        axios.put(`http://localhost:8000/api/products/${id}`, params)
            .then(res => {
                console.log(res)
                nav('/products')
            })
    }

    return (
        <div>
            <h1>Update {product.title}</h1>
            {
                loaded && <ProductForm
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                    onSubmitProp={updateProduct} 
                    />
            }
            <Link to={'/products'}>Back</Link>
        </div>
    )
}

export default UpdateForm