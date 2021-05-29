import React, { useEffect, FunctionComponent } from "react";

const Display: FunctionComponent = React.memo(({ recipes }) => {
  console.log("Display.js -- recipes:", recipes);
  return <div className="display col">Display works!</div>;
});

export default Display;
