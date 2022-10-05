import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OneProduct = () => {

    const [product, setProduct] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <h2>
                {product.title}
            </h2>
            <p>
                Amount: ${product.price}
            </p>
            <p>
                Description: "{product.description}"
            </p>
            <Link to={'/products'}>Back</Link>
        </div>
    )
}

export default OneProduct;