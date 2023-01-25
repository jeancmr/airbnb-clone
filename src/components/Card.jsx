import React from "react";
import star from "../assets/star.png";
// import swimmer from "../assets/katie-zaferes.png";
// import swimmer from `../assets/${props.img}`;
// import jelou from "../wedding.png";
export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        src={`../${props.img}`}
        alt="photo of swimmer Katie Zaferes"
        className="card-img"
      />
      <div className="card-text-box">
        <div className="card-rating">
          <img src={star} alt="star icon" className="star-img" />
          <span>{props.rating}</span>
          <span>&#40;{props.reviewCount}&#41;</span>
          <span>&#8226;</span>
          <span>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
