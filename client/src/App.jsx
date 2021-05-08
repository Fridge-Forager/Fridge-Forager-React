import React from "react";
import { Provider } from "react-redux";

import store from './redux/store';

import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => (
  <Provider store ={store}>
    <NavBar />
    <div className="dashboard-sidebar">
      <Sidebar />
      <Dashboard />
    </div>
  </Provider>
);

export default App;
