import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => (
  <>
    <NavBar />
    <div className="dashboard-sidebar">
      <Sidebar />
      <Dashboard />
    </div>
  </>
);

export default App;
