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
        <h1>Car-O-Pedia</h1>
        <p>Where renting gets easy !</p>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8'>
            <h2>About Company Page</h2>
            <h4>
              Car-O-Pedia makes renting easy. Wheather you plan to travel to a
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

      <div className='Team text-center'>
      <h1>Our Team</h1>
        <div className='Team_Container'>
          <div className='col-md-2'>
            <img
              className='img-fluid img-thumbnail'
              src='https://media.licdn.com/dms/image/D4E35AQHqyh6zEq__FQ/profile-framedphoto-shrink_400_400/0/1670389939603?e=1702522800&v=beta&t=Kitga29iFzG0XoGDxJ7Yq9hPotGUAguZZMvFuUL_m2U'
              alt=''
            />
          </div>
          <div className='col-md-2'>
            <img
              className='img-fluid img-thumbnail'
              src='https://media.licdn.com/dms/image/D4E35AQFQbh7J88zdeQ/profile-framedphoto-shrink_400_400/0/1685714498362?e=1702522800&v=beta&t=NTcIh09Wpr_WaV4NzwjBy89zsbqCvdx7qnewKKd-4JA'
              alt=''
            />
          </div>
          <div className='col-md-2'>
            <img
              className='img-fluid img-thumbnail'
              src='https://media.licdn.com/dms/image/D4E35AQF47LhjPFGbIA/profile-framedphoto-shrink_400_400/0/1681702794146?e=1702522800&v=beta&t=Vi8NsnPQ_ywJkAh3DoiuX5dpAipTjXcJtDOSgn9XpJE'
              alt=''
            />
          </div>
          <div className='col-md-2'>
            <img
              className='img-fluid img-thumbnail'
              src='https://media.licdn.com/dms/image/D4E03AQFz5vogYZK2Zw/profile-displayphoto-shrink_400_400/0/1676610478628?e=1707350400&v=beta&t=CE5sPB0XQQX_bTTpLmkLB1PUyJgmk8wevwUVMDUH2lU'
              width='500'
              height='600'
              alt=''
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;

