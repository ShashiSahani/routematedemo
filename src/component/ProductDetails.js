import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const param=useParams();
  console.log(param.id)
  return (
    <div>
  
  <div className="component">
  <h1>{param.id}-Product Details</h1>

  </div>
 </div>
  )
}

export default ProductDetails
