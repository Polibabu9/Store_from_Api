import React from 'react';
import { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import Productcard from './Productcard';

function ProductList() {
  const [product,SetProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [sort,setSort] = useState('');
    useEffect(()=> {
      fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => SetProduct(json)).catch((e)=> console.error(e));
    },[])


    const filteredProducts = product
    .filter(
      product => (product.title.toLowerCase().includes(search.toLowerCase())))
      .sort((a,b) => {
        if(sort === 'Low') return a.price - b.price;
        if(sort === 'High') return b.price - a.price;
        return 0;
      });

  return (
    <>
    <div>
      <input style={{width:'70%',padding: 20, fontWeight:'bold' ,marginBottom:20 , marginRight: 20 ,borderRadius:5}}
      type="text"
      value={search}
      placeholder='Search for Products'
      onChange={(e)=>{setSearch(e.target.value)}}
      />
      <select name="select" value={sort}  id="sort" onChange={(e)=>setSort(e.target.value)} style={{padding:20,borderRadius:5}}>
        <option value="" >Sort By</option>
        <option value="Low">Low to High</option>
        <option value="High"> High to Low</option>
      </select>
    </div>
    <div style={{display:'flex', flexWrap:'wrap' , gap:20}}>
      {filteredProducts.map((product)=>(<Productcard key={product.id} product ={product}/>))}
    </div>
    </>
  )
}

export default ProductList