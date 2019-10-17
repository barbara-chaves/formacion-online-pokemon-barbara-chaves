import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/buttons.scss'

const Buttons = props => {
  return (
    <div className="buttons">
      <Link to={props.prev}>
       <button className="prev-btn --btn">Previous Pokemon</button>
      </Link>
      <Link to="/">
        <button className="home-btn --btn">Home</button>
      </Link>
      <Link to={props.next}>
        <button className="next-btn --btn">Next Pokemon</button>
      </Link>
    </div>
  );
};

export default Buttons;
