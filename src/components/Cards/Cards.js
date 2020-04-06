import React from 'react';
import CountUp from 'react-countup';
import Spinner from '../Spinner';
import './Cards.module.css';
import casesImg from '../../images/cases.png';
import deathsImg from '../../images/deaths-large.png';
import recoveredImg from '../../images/recovered.png';
import hero from '../../images/corona-girl.png';

const Cards = ({
  data,
  data: { cases, todayCases, todayDeaths, deaths, recovered, updated },
}) => {
  console.log(data);
  if (!cases) return <Spinner />;
  return (
    <div className='row justify-content-between align-items-center global'>
      <div className='col-md-5 my-3'>
        <div className='row'>
          <div className='col-md-12 my-3'>
            <div className='row align-items-center justify-content-between no-gutters'>
              <div className='col-3'>
                <img src={casesImg} alt='Cases' className='img-fluid' />
              </div>
              <div className='col-8'>
                <h3>Confirmed</h3>
                <span>
                  <CountUp
                    start={0}
                    end={cases}
                    duration={2.3}
                    separator={','}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-12 my-3'>
            <div className='row align-items-center justify-content-between no-gutters'>
              <div className='col-3'>
                <img src={deathsImg} alt='Deaths' className='img-fluid' />
              </div>
              <div className='col-8'>
                <h3>Deaths</h3>
                <span>
                  <CountUp
                    start={0}
                    end={deaths}
                    duration={2.3}
                    separator={','}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-12 my-3'>
            <div className='row align-items-center justify-content-between no-gutters'>
              <div className='col-3'>
                <img src={recoveredImg} alt='Recovered' className='img-fluid' />
              </div>
              <div className='col-8'>
                <h3>Recovered</h3>
                <span>
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2.3}
                    separator={','}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-5 my-3'>
        <img src={hero} alt='' className='img-fluid' />
      </div>
    </div>
  );
};

export default Cards;
