import React from 'react';
import Banner from './HomeComponents/Banner';
import Featured from './HomeComponents/Featured';
import './../styles/home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <Featured />
    </div>
  )
}

export default Home