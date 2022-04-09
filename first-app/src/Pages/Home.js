import React from 'react';
import Navbar from '../../src/Components/Navbar';
import BalanceCard from '../../src/Components/BalanceCard';
import RecentSend from '../../src/Components/RecentSend';
import Feature from '../../src/Components/Feature';
import Offers from '../..//src/Components/Offers';

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <BalanceCard />
      <RecentSend />
      <Feature />
      <Offers />
    </div>
  );
}

export default Home;
