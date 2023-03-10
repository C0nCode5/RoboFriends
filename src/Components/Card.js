import React from "react";

const Card = (props) => {
  const { name, email } = props;
  return (
    <div className="tr bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
