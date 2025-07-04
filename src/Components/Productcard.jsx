import React from 'react'
import {useNavigate} from 'react-router-dom'
function Productcard(props) {
  const navigate = useNavigate();
  return (
    <>
    <div style={{width:200 ,height: 350, textAlign: 'center' , padding:10 , border:'1px solid #cce' }}>
      <img src={props.product.image} alt="" height={100} width={100} style={{objectFit:'contain'}}/>
      <h4>{props.product.title}</h4>
      <p>${props.product.price}</p>
      <button onClick={()=> navigate(`/product/${props.product.id}`)} style={{padding:5}}> View Details</button>
    </div>
    </>
  )
}

export default Productcard