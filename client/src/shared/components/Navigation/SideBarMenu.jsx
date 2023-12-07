import React, { useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

import { AuthContext } from "../../contexts/AuthContext";

const SideBarMenu = (props) => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const { toggleSideBar } = props;
  const { isLoggedIn, userId } = useContext(AuthContext);
  let sideBar = useRef(null);
  let tl = useRef();
  const mystyle = {
    color: "red",
  };
  if (currentTheme === themes.light) {
    mystyle.color = "red";
  } else {
    mystyle.color = "black";
  }
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      sideBar,
      1,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.75, ease: "Power2.inOut" }
    );
  }, []);

  useEffect(() => {
    toggleSideBar ? tl.current.play() : tl.current.reverse();
  }, [toggleSideBar]);

  return (
    <ul className="sidebar" ref={(el) => (sideBar = el)}>
      <li>
        <NavLink exact to="/" style={{ color: currentTheme.color }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/fleet" style={{ color: currentTheme.color }}>
          Fleet
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            style={{ color: currentTheme.color }}
            to={`/my-orders/${userId}`}
          >
            My Orders
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about" style={{ color: currentTheme.color }}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBarMenu;
