import React, { Component } from 'react';
import './index.css';
import './App.module.css';
import { Navbar, Cards, Charts, CountryPicker } from './components';
import { fetchDate, fetchLocalCountry } from './api';
import Footer from './components/Footer';
class App extends Component {
  state = { data: {}, localData: {}, country: '', flag: '' };

  async componentDidMount() {
    try {
      const data = await fetchDate();
      const localData = await fetchLocalCountry();
      this.setState({ data, localData });
    } catch (err) {
      console.log(err);
    }
  }
  handleCountryChange = async country => {
    const localData = await fetchLocalCountry(country);
    // console.log(localData);
    this.setState({ localData });
  };
  render() {
    const { data, localData } = this.state;
    return (
      <div>
        <Navbar />
        <Cards data={data} />
        <div className='container'>
          <CountryPicker
            localData={localData}
            handleCountryChange={this.handleCountryChange}
          />
          <Charts />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
