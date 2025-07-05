import React from 'react'
import {useNavigate} from 'react-router-dom'
import './product.css'




function Productcard(props) {
  const navigate = useNavigate();
  return (
    <>
    <div className='Product-card'>
      <div className="image" >
      <img src={props.product.image} alt="" height={120} width={120} style={{objectFit:'contain'}}/>
      </div>
      <div className="content">
      <h4>{props.product.title}</h4>
      <p>${props.product.price}</p>
      <button className='btn' onClick={()=> navigate(`/product/${props.product.id}`)}> View Details</button>
      </div>
    </div>
    </>
  )
}

export default Productcard