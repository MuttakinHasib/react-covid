import React from 'react';
import logo from '../images/deaths-large.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
const Navbar = ({ link, nav }) => {
  return (
    <div className='navbar sticky-top bg-white border-bottom'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <img
            className='logo'
            src={logo}
            style={{ width: '55px' }}
            alt='logo'
          />
          <h5 className='mb-0 font-weight-bold'>
            COVID-19 <br />
            <small className='text-muted font-weight-light'>Corona Virus</small>
          </h5>
        </div>
        <ul className='navbar-nav flex-row ml-auto'>
          <li className='nav-item fb'>
            <a
              href='https://facebook.com/hasibmolla28/'
              className='nav-link icon facebook'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li className='nav-item ml-3'>
            <a
              href='https://github.com/MuttakinHasib/'
              className='nav-link icon github'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li className='nav-item ml-3'>
            <Link className='nav-link' to={link}>
              <Button type='dashed'>{nav}</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
