import React from 'react';
import Navbar from '../../UI/Navbar/Navbar';

import './Home.scss';
import Featured from '../../UI/Featured/Featured';
import List from '../../UI/List/List';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='series' />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
