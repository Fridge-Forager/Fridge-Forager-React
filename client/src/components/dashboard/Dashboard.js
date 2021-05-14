import React, { useEffect } from "react";

const Dashboard = React.memo(({ recipes }) => {
  console.log("Dashboard.js -- recipes:", recipes);
  return <div className="dashboard col">Dashboard works!</div>;
});

export default Dashboard;
