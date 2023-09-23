import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { places } from '../Data';
import './cards.css';

function BasicExample() {
  return (
    <>
      <div className="container my-5">
      <h1><b>Explore the world with our premier Travel & Tours Services. Unforgettable adventures await. Let's make your travel dreams a reality.</b></h1>
        <div className="row">
          {places.map((card) => (
            <div key={card.id} className="col-md-4">
              <Card style={{ marginBottom: '20px',height:'550px',backgroundColor:'#21252966',color:'white',fontWeight:'bold'}}>
                <Card.Img variant="top" src={card.image_url} style={{Width:'100%',height:'300px',cursor:'pointer'}} alt={card.title} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{width:'100%',height:'80px'}}>{card.description}</Card.Text>
                  <Button variant="primary" style={{ backgroundColor: 'black', color: 'white' }}>
                    For More Info
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BasicExample;
