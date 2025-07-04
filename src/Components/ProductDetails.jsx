import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

function ProductDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product,setProduct] = useState('');

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => setProduct(json));
  },[]);

  if(!product) return <LoadingSpinner />;

  return (
    <>
    <button onClick={()=> navigate('/')} style={{width:50 , padding:5}}>Back</button>
    <div style={{padding:20 ,display:'flex'}}>
      <div style={{flex:1 ,textAlign:'center'}}>
        <img src={product.image} alt={product.title}  height={400} width={300} style={{objectFit:'contain' ,marginTop:20}}/>
      </div>
      <div style={{flex:1}}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>Price: ${product.price}</h2>
        <p>Ratings {'\u2B50'} {product.rating.rate} & Count:👍 {product.rating.count}</p>
      </div>
    </div>
    </>
  )
}

export default ProductDetails