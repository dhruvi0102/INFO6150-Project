import React, {   useContext  } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ThemeContext, themes} from '../../shared/contexts/ThemeContext';

import { MdDirectionsCar, MdAirlineSeatReclineNormal } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { IoMdSnow } from "react-icons/io";

const SingleFleetItem = (props) => {
  const history = useHistory();
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  const onToRentMove = () => {
    history.push(`/rent/${props.id}`);
  };
  console.log(props.image);

  return (
    <div className="item-cars" style={{backgroundColor:currentTheme.cardColor, color:currentTheme.cardFontColor, borderBottomColor:currentTheme.cardBorderBottomColor}}>
      <img onClick={onToRentMove} src={props.image} alt="car"  />
      <p className="name">
        {props.name}<br></br>
        <span> {props.model}</span>
      </p>
      <div className="options">
        <p style={{ textTransform: "capitalize" }} className="car-type">
          <span>
            <MdDirectionsCar />
          </span>{" "}
          {props.carType}
        </p>
        <p className="car-type">
          <span>
            <MdAirlineSeatReclineNormal />
          </span>{" "}
          {props.seats}
        </p>
        <p className="car-type">
          <span>
            <GoGear />
          </span>{" "}
          {props.gears}
        </p>
        <p className="car-type">
          <span>
            <IoMdSnow />
          </span>{" "}
          {props.clima ? "yes" : "no"}
        </p>
      </div>
      <br/>
      
      <p className="price">
        Price - <span>${props.price.toFixed(2)}</span> /For a Day{" "}
      </p>
      <div className="info-btn">
        <p>
          <NavLink to={`/rent/${props.id}`}>rent</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SingleFleetItem;
