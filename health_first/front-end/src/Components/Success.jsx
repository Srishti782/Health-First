import React from 'react'
import './Success.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Success = () => {
  return (
      <div className='success-body'>
        <div className="success-card">
            <h1>Success</h1> 
            <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
            <Button variant='success' style={{width:"150px"}} > <Link to="/" style={{textDecoration:"none" , color:"white"}}> Home </Link> </Button>
        </div>
      </div>
  )
}

export default Success