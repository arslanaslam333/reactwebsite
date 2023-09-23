import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className="container1">
    <div className="containers">
    <h1 className="heading">It is Better to Travel Well Than to Arrive
    </h1>
    <h4 className='para'>Embark on unforgettable journeys with our travel services. Explore stunning destinations, create lasting memories, and let adventure be your guide.</h4>
    <Link to='/about'>
    <Button className='btn' variant="outline-success" >Go To About
    </Button>
    </Link>
    </div>
    </div>
    </>
  )
}
