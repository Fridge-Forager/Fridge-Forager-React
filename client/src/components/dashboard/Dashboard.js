import React, {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Display from '../display/Display';

const Dashboard = ({}) => {

  return (
    <div className='dashboard'>
      <Sidebar />
      <Display />
    </div>
  );
};
export default Dashboard;