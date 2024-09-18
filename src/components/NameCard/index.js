import React, {memo, useEffect} from "react";

import "./index.css";
import {addAnimation} from "../../utils";
import {ColorName} from "../ColorName";

export const NameCard = memo(({ id, name, sex, age, colors }) => {
  const cardId = `name-card-${id}`;

  // Every time this component is rendered, the animation will be added.
  useEffect(() => {
    addAnimation(cardId);
  });

  return (
    <div className="name-card" id={cardId}>
      <div className="name-card__title">
        <h2 className="name-card__title__id"> {id}. </h2>
        <h3 className="name-card__title__name"> {name} </h3>
      </div>
      <p> Sex: {sex} </p>
      <p> Age: {age} </p>
      {colors && (
        <p> Favorite Colors: {colors.map(color =>
          <ColorName
            key={`${cardId}${color.id}`}
            id={`${cardId}${color.id}`}
            name={color.name}
          />)}
        </p>
      )}
    </div>
  );
});
