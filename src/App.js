import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import {
  Navbar,
  Cards,
  CardsBD,
  Charts,
  CountryPicker,
  CountryPickerBD,
} from './components';
import { fetchDate, fetchLocalCountry } from './api';
import Footer from './components/Footer';
class App extends Component {
  state = { data: {}, localData: {}, country: 'Bangladesh' };

  async componentDidMount() {
    try {
      const data = await fetchDate();
      const localData = await fetchLocalCountry();
      this.setState({ data, localData });
    } catch (err) {
      console.log(err);
    }
  }
  handleCountryChange = async countryName => {
    const localData = await fetchLocalCountry(countryName);
    const { country } = localData;
    this.setState({ localData, country });
  };
  render() {
    const { data, localData, country } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Navbar font='font-en' link='/en' nav='English' />
                  <CardsBD data={data} />
                  <div className='container'>
                    <CountryPickerBD
                      country={country}
                      localData={localData}
                      handleCountryChange={this.handleCountryChange}
                    />
                    <Charts font='font-bd' msg='গত ৩০ দিনের তথ্য' />
                  </div>
                  <Footer font='font-bd' msg='ডেভেলপ করেছে' name='হাসিব' />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/en'
              render={props => (
                <Fragment>
                  <Navbar font='font-bd' link='/' nav='বাংলা' />
                  <Cards data={data} />
                  <div className='container'>
                    <CountryPicker
                      country={country}
                      localData={localData}
                      handleCountryChange={this.handleCountryChange}
                    />
                    <Charts font='font-en' msg={`Last 30 day's information`} />
                  </div>
                  <Footer font='font-en' msg='Developed' by='by' name='Hasib' />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
