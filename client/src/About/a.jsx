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

