import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <div className="container4">
    <div className="main">
      <h1>We are Grand Travel & Tour World Class Travel Agency</h1>
      <p>Trips, experiences, and places. All in one service.</p>
      <Link to='/contact'><button className='btn1'>For Contact-Us</button></Link>
    </div>
    </div>
    <div className="container5">
    <div className="main2">
      <h1><b>This adventure isn’t about change but it seems to be an inevitability</b></h1>
      <br />
      <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.</p>
      <br /><br />
      <div className="section">
        <div className="trip">
             <h1><b>1,190</b></h1>
             <p style={{color:'#aa9898'}}>trips</p>
        </div>
        <div className="trip">
             <h1><b>7,010</b></h1>
             <p style={{color:'#aa9898'}}>Happy Customers</p>
        </div>
    </div>
    </div>
    
    </div>
    </>
  )
}
