import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Failure.css"

const Failure = () => {
  return (
    <div className='failure-body'>
    <div className="failure-card">
        <h1>Failed</h1> 
        <p>We are sorry we could not register you;<br/> Please try again </p>
        <Button variant='warning' style={{width:"150px"}} > <Link to="/contact" style={{textDecoration:"none" , color:"white"}}> Try Again </Link> </Button>
    </div>
  </div>
  )
}

export default Failure