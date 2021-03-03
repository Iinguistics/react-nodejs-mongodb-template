import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    const fetchProducts = async()=>{
        const res = await axios.get('/api/products');
        setProducts(res.data.products);
     }
    fetchProducts();
  }, []);
   
        const renderProducts = ()=>{
            if(products !== null){
                return products.map((item)=>{
                    return (
                        <div>
                            <h3>Name: {item.name}</h3>
                            <h5>Price$: {item.price}</h5>
                            <h5>Brand: {item.brand}</h5>
                        </div>
                    )
                })
            }else{
                return (
                    <h1>No products</h1>
                )
            }
        }


    return (
        <div>
            <h1>Products</h1>
            {renderProducts()}
             
        </div>
    )
}

export default Home
