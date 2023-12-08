import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gsap from 'gsap';
import axios from '../axios';
import './landing.css';
import FleetList from '../Fleet/components/FleetList';
import PreLoader from '../shared/components/PreLoader/PreLoader';
import RentalInfoCard from '../shared/components/RentalInfoCard/RentalInfoCard';
import Layout from '../shared/components/Layout/Layout';
import Cabin from '../assets/cabin1.jpeg';
import MansionRental from '../assets/Mansion1.jpeg';
import BeachFront from '../assets/beachfronthouse2.jpeg';
import myVideo from '../assets/TravelVideo.mp4';
import { ThemeContext, themes } from '../shared/contexts/ThemeContext';

const LandingPage = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  let tl = useRef();
  let title = useRef(null);
  let line = useRef(null);
  let subtitle = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .from(title, 1.5, { scale: 0.5, opacity: 0 })
      .from(subtitle, 1.5, { y: 20, opacity: 0 }, 0.75)
      .from(line, 2, { width: 0 }, 0.5);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/fleet/offers/Rental')
      .then((res) => {
        setIsLoading(false);
        setOffers(res.data.rental);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const onSearchtHandler = useCallback(
    (name) => {
      const convName = name.toLocaleLowerCase();
      history.push(`/fleet/sort/${convName}`);
    },
    [history]
  );

  return (
    <Layout>
      <div className='bodyContent'>
        <div className='topContainer'>
          <video className='video-container' autoPlay muted loop id='video'>
            <source src={myVideo} type='video/mp4' />
          </video>
          {/*<div className='content'>
            <h1 ref={(el) => (title = el)} className='Rental-title'>
              Welcome to HouseHop
            </h1>
            <p ref={(el) => (subtitle = el)} className='sub-title'>
              Stay and enjoy vacation Carefree
            </p>
  </div>*/}
        </div>

        <div
          className='headingtop'
          style={{ backgroundColor: 'white' }}
        >
          <div className='space'></div>
          <h1 ref={(el) => (title = el)} className='rental-title'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Low weekly rates. Avaliable right now.
          </h1>
          <p ref={(el) => (subtitle = el)} className='subtitle'>
            Cancel at any time
          </p>
          <div className='space'></div>
        </div>

        <p
          ref={(el) => (line = el)}
          className='line'
          style={{ backgroundColor: currentTheme.cardBorderBottomColor }}
        />
        {isLoading ? <PreLoader /> : <FleetList fleet={offers} />}
        <p
          className='offers-btn'
          style={{ borderBottomColor: currentTheme.cardBorderBottomColor }}
        >
          <NavLink to='/fleet'>Check our other offers</NavLink>
        </p>
        <p className='slogan'>Don't dream it, rent it </p>
        <p
          ref={(el) => (line = el)}
          className='line'
          style={{ backgroundColor: currentTheme.cardBorderBottomColor }}
        />
        <section className='sorting-section'>
          <RentalInfoCard
            src={Cabin}
            alt={'Cabin'}
            clicked={onSearchtHandler}
            name={'Cabin'}
            text={'Check our Cabins'}
          />
          <RentalInfoCard
            src={MansionRental}
            alt={'Mansion'}
            clicked={onSearchtHandler}
            name={'mension'}
            text={'Check our Mansions'}
          />
          <RentalInfoCard
            src={BeachFront}
            alt={'beachfront'}
            clicked={onSearchtHandler}
            name={'beachfront'}
            text={'Check our BeachFront Rentals'}
          />
        </section>
      </div>
    </Layout>
  );
};

export default LandingPage;
