import React from "react";
import { Provider } from "react-redux";

import store from './redux/store';

import Dashboard from "./components/Dashboard";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => (
  <Provider store ={store}>
    <NavBar />
    <Dashboard />
    <Sidebar />
  </Provider>
);

export default App;
