import React from "react";
import "../stylesheets/Testimonial.css";

function Testimonial(props) {
  return (
    <div className="testimonial-container">
      <img 
      className="testimonial-image"
      src={require(`../images/${props.image}.png`)} 
      alt="Shawn"
      />
      <div className="testimonial-text-container">
        <p className="testimonial-name">
          <strong>{props.name}</strong> in {props.country}</p>
        <p className="testimonial-position">
          {props.position} at <strong>{props.company}</strong></p>
        <p className="testimonial-text">"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default Testimonial;