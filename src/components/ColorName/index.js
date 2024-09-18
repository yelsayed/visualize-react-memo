import {memo, useEffect} from "react";
import {addAnimation} from "../../utils";

export const ColorName = memo(({ id, name }) => {
  const colorId = `color-id-${id}`;

  // Every time this component is rendered, the animation will be added.
  useEffect(() => {
    addAnimation(colorId);
  });

  return (
    <span id={colorId} className="child-name"> {name} </span>
  );
})
