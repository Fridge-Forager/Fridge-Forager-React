import React, { useEffect } from "react";

const Display = React.memo(({ recipes }) => {
  console.log("Display.js -- recipes:", recipes);
  return <div className="display col">Display works!</div>;
});

export default Display;
