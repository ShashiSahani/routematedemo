import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
  const navigate=useNavigate();

  const handleSubmit=()=>{
    console.log("---------")
    navigate("/")
  }
  return (
    <div>
     
     <div className="component">
     <h1>Contact</h1>
     </div>
<button onClick={handleSubmit}>Back to Home</button>

    </div>
  )
}

export default Contact
