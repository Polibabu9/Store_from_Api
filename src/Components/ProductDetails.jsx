import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';

function ProductDetails() {

  const {id} = useParams();
  const [product,setProduct] = useState(null);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => setProduct(json));
  },[id]);

  if(!product) return <p> Loading....... </p>;

  return (
    <>
    <div style={{padding:20 ,display:'grid'}}>
      <Link to="/">
      <button>Back</button>
      </Link>
      <img src={product.image} alt={product.title}  height={400} width={300} style={{objectFit:'contain'}}/>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <p>Ratings : {product.rating.rate} count: {product.rating.count}</p>
    </div>
    </>
  )
}

export default ProductDetails