import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm'
const Main = (props) => {

    const [product, setProduct] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
            .then(res=>{
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    const deleteProduct=(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(product.filter(oneProduct=>oneProduct._id !== id))

        })
        .catch(err=>console.log(err))
    }

    const createProduct = params=>{
        axios.post('http://localhost:8000/api/products',params)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setProduct([...product,res.data])
        })
        .catch(err => console.log(err))
    }



    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle='' initialPrice='' initialDescription='' />
            <hr />
            <ProductList product={product} setProduct={setProduct}deleteProduct={deleteProduct} />
        </div>
    )
}
export default Main;