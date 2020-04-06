import React from 'react';
import WaterWave from 'react-water-wave';
import img from '../images/slider-bg.jpg';

const Home = () => {
  return (
    <div>
      <WaterWave
        imageUrl={img}
        resolution={300}
        dropRadius={30}
        perturbance={0.01}
        style={{
          height: '50vh',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {() => (
          <div className='container'>
            <h1 className='text-center' style={{fontSize:'80px',color: '#fff'}}>COVID</h1>
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default Home;
