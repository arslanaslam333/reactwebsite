import React from 'react';
import img1 from './images/Services.jpg';
import img2 from './images/Advantures.jpg';
import img3 from './images/Experience.jpg';
import Cards from "./Cards";
// import { places } from '../../data.json';


export default function Services() {
  
  return (
    <>
    <div className="container">
    <div className="services-container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Service 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Adventure's Journeys</h5>
              <p>Our Travel & Tours Company offers thrilling journeys, unlocking nature's wonders worldwide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Service 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Great Experiences</h5>
              <p>"Unlock unforgettable adventures with our travel company's travel & Tours."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Service 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5><b>Exciting Memories</b></h5>
              <p>"Explore new horizons, create lasting bonds, and cherish exciting travel memories."</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    <Cards />
    </>
  );
}
