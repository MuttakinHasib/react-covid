import React, { useEffect, useState } from 'react';
import { fetchCountryData } from '../../api';
import { Select } from 'antd';
import CountUp from 'react-countup';
import casesImg from '../../images/cases.png';
import deathsImg from '../../images/deaths-large.png';
import recoveredImg from '../../images/recovered.png';
const { Option } = Select;

const CountryPicker = ({ handleCountryChange, localData }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  return (
    <div>
      <div className='row justify-content-between align-items-center p-3'>
        <div className='col-md-12 text-center'>
          <h1 className='mb-5'>Local Country's Information</h1>
        </div>
        <div className='my-3 d-flex align-items-center'>
          <h4 className='mb-0'>
            {localData?.country ? (
              localData.country
            ) : (
              <small className='text-primary'>Loading . . .</small>
            )}
          </h4>
          &nbsp; &nbsp;
          <div>
            {localData?.flag ? (
              <img
                src={localData.flag}
                style={{ width: '35px' }}
                alt='&nbsp;'
              />
            ) : null}
          </div>
        </div>
        <div className='my-3'>
          <div className='form-row'>
            <Select
              onChange={country => handleCountryChange(country)}
              showSearch
              size={'large'}
              style={{ width: 200 }}
              placeholder='Select a Country'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='bangladesh'>Bangladesh</Option>
              {fetchedCountryData?.map((data, i) => (
                <Option key={i} value={data.code}>
                  {data.country}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className='row local'>
        <div className='col-md-4 my-3'>
          <div className='row cases shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={casesImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-info'>
                {localData?.cases >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.cases}
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
        <div className='col-md-4 my-3'>
          <div className='row deaths shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={deathsImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-danger'>
                {localData?.deaths >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.deaths}
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
        <div className='col-md-4 my-3'>
          <div className='row recovered shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img
                src={recoveredImg}
                alt='&nbsp;'
                className='img-fluid logo'
              />
            </div>
            <div className='col-8'>
              <h2 className='text-success'>
                {localData?.recovered >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.recovered}
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
      <div className='row local'>
        <div className='col-md-12 my-3 py-3 text-left'>
          <h3>Today's Last Updates :</h3>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row cases shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={casesImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-info'>
                {localData?.todayCases >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.todayCases}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className='text-primary'>Loading . . .</small>
                )}
              </h2>
              <p className='text-muted'>New Cases</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row deaths shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={deathsImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-danger'>
                {localData?.todayDeaths >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.todayDeaths}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className='text-primary'>Loading . . .</small>
                )}
              </h2>
              <p className='text-muted'>New Deaths</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row critical shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img
                src={recoveredImg}
                alt='&nbsp;'
                className='img-fluid logo'
              />
            </div>
            <div className='col-8'>
              <h2 className='text-warning'>
                {localData?.critical >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.critical}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className='text-primary'>Loading . . .</small>
                )}
              </h2>
              <p className='text-muted'>Critical</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
