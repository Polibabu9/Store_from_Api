import React, { useState, useEffect } from 'react';
import Productcard from './Productcard';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch((e) => console.error(e));
  }, []);

  const filteredProducts = product
    .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'Low') return a.price - b.price;
      if (sort === 'High') return b.price - a.price;
      return 0;
    });

  return (
    <>
      <div className="header">
        <h1>E-Store</h1>
      </div>

      <div className="search-sort">
        <input
          type="text"
          value={search}
          id='input'
          name='input'
          placeholder="Search for Products"
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          name="select"
          value={sort}
          id="sort"
          onChange={(e) => setSort(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort By</option>
          <option value="Low">Low to High</option>
          <option value="High">High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
