import React from 'react'
import {Link} from 'react-router-dom'
function Productcard(props) {
  return (
    <>
    <div style={{width:200 ,height: 300, textAlign: 'center' , padding:10 , border:'1px solid #cce' }}>
      <img src={props.product.image} alt="" height={100} width={100} style={{objectFit:'contain'}}/>
      <h4>{props.product.title}</h4>
      <p>${props.product.price}</p>
        <Link to={`/product/${props.product.id}`}>
          <button>  View Details </button>
        </Link>
    </div>
    </>
  )
}

export default Productcard