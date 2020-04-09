import React, { useEffect, useState, Fragment } from 'react';
import { fetchCountryData } from '../../api';
import { Select } from 'antd';
import CountUp from 'react-countup';
import casesImg from '../../images/cases.png';
import deathsImg from '../../images/deaths-large.png';
import recoveredImg from '../../images/recovered.png';
import styles from './CountryPickerBD.module.css';
const { Option } = Select;

const CountryPicker = ({ handleCountryChange, localData, country }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  return (
    <div className={styles.bn}>
      <div className='row justify-content-between align-items-center p-3'>
        <div className='col-md-12 text-center'>
          <h2 className='mb-5'>
            আপনি দেখতে চেয়েছেন <span className={styles.en}>{country}</span> এর
            তথ্য
          </h2>
        </div>
        <div className='my-3 d-flex align-items-center'>
          <h4 className={`${styles.en} mb-0`}>
            {localData?.country ? (
              localData.country
            ) : (
              <small className={`${styles.en} text-primary`}>
                Loading . . .
              </small>
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
          <div className={`${styles.en} form-row`}>
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
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('bn-BD')}
                      start={0}
                      end={localData.cases}
                      duration={2.3}
                      separator={','}
                    />{' '}
                    <small className='text-dark'>জন</small>
                  </Fragment>
                ) : (
                  <small className={`${styles.en} text-primary`}>
                    Loading . . .
                  </small>
                )}
              </h2>
              <h4 className='text-muted'>আক্রান্ত হয়েছে</h4>
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
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('bn-BD')}
                      start={0}
                      end={localData.deaths}
                      duration={2.3}
                      separator={','}
                    />{' '}
                    <small className='text-dark'>জন</small>
                  </Fragment>
                ) : (
                  <small className={`${styles.en} text-primary`}>
                    Loading . . .
                  </small>
                )}
              </h2>
              <h4 className='text-muted'>মারা গিয়েছে</h4>
            </div>
          </div>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row recovered shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={recoveredImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-success'>
                {localData?.recovered >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('bn-BD')}
                      start={0}
                      end={localData.recovered}
                      duration={2.3}
                      separator={','}
                    />{' '}
                    <small className='text-dark'>জন</small>
                  </Fragment>
                ) : (
                  <small className={`${styles.en} text-primary`}>
                    Loading . . .
                  </small>
                )}
              </h2>
              <h4 className='text-muted'>সুস্থ্য হয়েছেন</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='row local'>
        <div className='col-md-12 my-3 py-3 text-left'>
          <h3>সর্বশেষ তথ্য এখানে </h3>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row cases shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={casesImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-info'>
                {localData?.todayCases >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('bn-BD')}
                      start={0}
                      end={localData.todayCases}
                      duration={2.3}
                      separator={','}
                    />{' '}
                    <small className='text-dark'>জন</small>
                  </Fragment>
                ) : (
                  <small className={`${styles.en} text-primary`}>
                    Loading . . .
                  </small>
                )}
              </h2>
              <h4 className='text-muted'>আজ আক্রান্ত হয়েছে</h4>
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
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('bn-BD')}
                      start={0}
                      end={localData.todayDeaths}
                      duration={2.3}
                      separator={','}
                    />{' '}
                    <small className='text-dark'>জন</small>
                  </Fragment>
                ) : (
                  <small className={`${styles.en} text-primary`}>
                    Loading . . .
                  </small>
                )}
              </h2>
              <h4 className='text-muted'>আজ মারা গিয়েছে</h4>
            </div>
          </div>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row critical shadow align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={recoveredImg} alt='&nbsp;' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-warning'>
                {localData?.critical >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('bn-BD')}
                      start={0}
                      end={localData.critical}
                      duration={2.3}
                      separator={','}
                    />{' '}
                    <small className='text-dark'>জনের</small>
                  </Fragment>
                ) : (
                  <small className={`${styles.en} text-primary`}>
                    Loading . . .
                  </small>
                )}
              </h2>
              <h4 className='text-muted'>গুরুতর অবস্থা</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
