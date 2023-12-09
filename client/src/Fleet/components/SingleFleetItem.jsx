import React, {   useContext  } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ThemeContext, themes} from '../../shared/contexts/ThemeContext';

import { MdCastle, MdBeachAccess,MdCabin } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";

const SingleFleetItem = (props) => {
  const history = useHistory();
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  const onToRentMove = () => {
    history.push(`/rent/${props.id}`);
  };
  console.log(props.image);

  return (
    <div className="item-rental" style={{backgroundColor:currentTheme.cardColor, color:currentTheme.cardFontColor, borderBottomColor:currentTheme.cardBorderBottomColor}}>
      <img onClick={onToRentMove} src={props.image} alt="rental"  />
      <p className="name">
        {props.name}<br></br>
        <span> {props.rentalmodel}</span>
      </p>
      <div className="options">
        <p style={{ textTransform: "capitalize" }} className="rental-type">
          <span>
            <MdCabin />
          </span>{" "}
          {props.rentalType}
        </p>
        <p className="rental-type">
          <span>
            <MdBeachAccess />
          </span>{" "}
          {props.rooms}
        </p>
        <p className="rental-type">
          <span>
            <MdCastle />
          </span>{" "}
          {props.bathroom}
        </p>
        <p className="rental-type">
          <span>
            <GiTreehouse />
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
