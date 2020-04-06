import React, { Component } from 'react';
import './index.css';
import './App.module.css';
import { Cards, Charts, CountryPicker } from './components';
import { fetchDate } from './api';
import WaterWave from 'react-water-wave';
import img from './images/slider-bg.jpg';
class App extends Component {
  state = { data: {} };

  async componentDidMount() {
    const data = await fetchDate();
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <WaterWave
          imageUrl={img}
          resolution={300}
          dropRadius={30}
          perturbance={0.01}
          style={{
            height: '100vh',
            width: '100%',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0,0,0,.1)',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {() => (
            <div className='container'>
              <Cards data={data} />
              <CountryPicker />
              <Charts />
            </div>
          )}
        </WaterWave>
        <div style={{height:'100vh'}}></div>
      </div>
    );
  }
}

export default App;
