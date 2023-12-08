import React, { useRef, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import './About.css';

// import 'https://kit.fontawesome.com/a076d05399.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';

const About = (props) => {
  return (
    <div className='AboutPage'>
      <div className='jumbotron text-center'>
        <h1>HouseHop</h1>
        <p>Where renting gets easy !</p>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8'>
            <h2>About Company Page</h2>
            <h4>
              HouseHop makes renting easy. Whether you plan to travel to a
              hill station in an SUV, or rent a bike on the beaches of Goa,
              We've got you covered.
            </h4>
            <p>
              We offer market's best rates and offer full insurance for your
              trip, to make you worry-less and free.
            </p>
          </div>
          <div className='col-sm-4'>
            <i
              className='fas fa-car'
              style={{
                float: 'right',
                fontSize: '148px',
                color: 'red',
              }}
            ></i>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-grey'>
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
              <strong>VISION:</strong> The vision of this project is to provide
              a website where users may reserve cars and make service requests
              from anywhere in the world. Car-O-Pedia will allow customers to
              make reservations for their cars from any location in the world. A
              customer can reserve a car after setting up an account on the
              website. fully integrated online system. It includes details about
              the kind of car model they want to drive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

