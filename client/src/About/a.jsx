import React, { useRef, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import './About1.css';

// import 'https://kit.fontawesome.com/a076d05399.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';

const About = (props) => {
  return (
    <div className='AboutPage'>
      <div className='jumbotron text-center'>
        <h1>HouseHop</h1>
        <h4>Get to Know HouseHop</h4>
        <p>Where families travel better together </p>
      </div>
      <div className='first-section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8'>
            <h2>About Company Page</h2>
            <h4>
            Welcome to HouseHop, where finding your ideal rental is a breeze. 
            Whether you're dreaming of a cozy cottage nestled in the hills or seeking a beachfront bungalow in Goa, 
            we've got the perfect place for you.
            </h4>
            <p>
              We offer market's best rates and offer full insurance for your
              trip, to make you worry-less and free.
            </p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-home logo'></span>
          </div>
        </div>
      </div>
      </div>
       
      <div className='second-section'>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-sm-4'>
              <span className='glyphicon glyphicon-globe logo'></span>
            </div>
            <div className='values col-sm-8'>
              <h2>Our Values</h2>
              <h4>
                <strong>MISSION:</strong> To offer reliable services and make
                renting easy.{' '}
              </h4>
              <p>
                <strong>VISION:</strong> HouseHop: Reserve dream homes worldwide.
                Effortless online platform. User-friendly. Create account, 
                browse diverse properties, tailor preferences. 
                Hassle-free booking for a personalized, seamless experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

