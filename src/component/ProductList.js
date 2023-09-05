import React from 'react'
import {  useSearchParams } from 'react-router-dom'

function ProductList() {
  const [searchParams]=useSearchParams();
  console.log(searchParams.get("q"));
  console.log(searchParams.get("instock"))
  console.log(searchParams.get("keywords"))
  return (
    <div>
  
  <div className="component">
  <h1>Product list</h1>

  </div>
 </div>
  )
}

export default ProductList
