import React from 'react';
import Banner from './HomeComponents/Banner';
import Featured from './HomeComponents/Featured';
import Footer from './HomeComponents/Footer';
import './../styles/home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home