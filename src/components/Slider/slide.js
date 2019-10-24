import React from "react";

const slide = props => {
  return (
    <div className="swiper-slide">
      <h4 className="position">{props.position}</h4>
      <h2 className="name">{props.name}</h2>
    </div>
  )
}

export default slide;