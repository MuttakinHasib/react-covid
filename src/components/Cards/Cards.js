import React from 'react';
import CountUp from 'react-countup';
import casesImg from '../../images/cases.png';
import deathsImg from '../../images/deaths-large.png';
import recoveredImg from '../../images/recovered.png';
import Moment from 'react-moment';
import GlobalDataChart from '../Charts/GlobalDataChart';

const Cards = ({ data }) => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='row py-5 justify-content-between align-items-center global'>
          <div className='col-md-12'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-sm-6'>
                <h3>Global information : </h3>
              </div>
              <div className='col-sm-6 text-sm-right'>
                <h5>
                  {data?.updated ? (
                    <small className='text-muted'>
                      Last updated <Moment fromNow>{data?.updated}</Moment>
                    </small>
                  ) : (
                    <small className='text-info'>Updating . . .</small>
                  )}
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-8 text-center my-3'>
            <GlobalDataChart />
          </div>
          <div className='col-lg-4 my-3'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-lg-12 my-3'>
                <div className='row cases shadow align-items-center justify-content-between no-gutters'>
                  <div className='col-3'>
                    <img
                      src={casesImg}
                      alt='Cases'
                      className='img-fluid logo'
                    />
                  </div>
                  <div className='col-8'>
                    <h2 className='text-info'>
                      {data?.cases ? (
                        <CountUp
                          start={0}
                          end={data?.cases}
                          duration={2.3}
                          separator={','}
                        />
                      ) : (
                        <small className='text-primary'>Loading . . .</small>
                      )}
                    </h2>
                    <p className='text-muted'>Confirmed</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 col-lg-12 my-3'>
                <div className='row deaths shadow align-items-center justify-content-between no-gutters'>
                  <div className='col-3'>
                    <img
                      src={deathsImg}
                      alt='Deaths'
                      className='img-fluid logo'
                    />
                  </div>
                  <div className='col-8'>
                    <h2 className='text-danger'>
                      {data?.deaths ? (
                        <CountUp
                          start={0}
                          end={data?.deaths}
                          duration={2.3}
                          separator={','}
                        />
                      ) : (
                        <small className='text-primary'>Loading . . .</small>
                      )}
                    </h2>
                    <p className='text-muted'>Deaths</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 col-lg-12 my-3'>
                <div className='row recovered shadow align-items-center justify-content-between no-gutters'>
                  <div className='col-3'>
                    <img
                      src={recoveredImg}
                      alt='Recovered'
                      className='img-fluid logo'
                    />
                  </div>
                  <div className='col-8'>
                    <h2 className='text-success'>
                      {data?.recovered ? (
                        <CountUp
                          start={0}
                          end={data?.recovered}
                          duration={2.3}
                          separator={','}
                        />
                      ) : (
                        <small className='text-primary'>Loading . . .</small>
                      )}
                    </h2>
                    <p className='text-muted'>Recovered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
