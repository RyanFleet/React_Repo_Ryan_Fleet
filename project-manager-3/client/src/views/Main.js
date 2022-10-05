import React, { useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm'
const Main = (props) => {

    const [product, setProduct] = useState([]);

    const removeFromList= id =>{
        setProduct(product.filter(oneProduct=>oneProduct._id !== id))
    }

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <hr />
            <ProductList product={product} setProduct={setProduct} removeFromList={removeFromList} />
        </div>
    )
}
export default Main;