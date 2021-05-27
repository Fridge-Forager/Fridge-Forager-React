import React, {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Display from '../display/Display';
import useFetchRecipes from '../../API/useFetchRecipes';


const Dashboard = ({}) => {
  const [recipes, setRecipes] = useFetchRecipes([]);

  return (
    <div className='dashboard'>
      <Sidebar fetchRecipes={setRecipes}/>
      <Display recipes={recipes}/>
    </div>
  );
};
export default Dashboard;