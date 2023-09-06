import React from 'react'
import { useNavigate ,Outlet} from 'react-router-dom'
export default  function Contact() {
  const navigate=useNavigate();

  const handleSubmit=()=>{
    console.log("---------")
    // navigate("/")
  }
  return (
    <div>
     
     <div className="component">
     <h1>Contact</h1>
     </div>
<button onClick={handleSubmit}>Submit</button>
<Outlet/>
    </div>
  )
}


