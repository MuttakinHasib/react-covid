import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className='lead text-center p-4'>
          Made with <i className='fas heart fa-heart'></i> by{' '}
          <Link href='https://facebook.com/hasibmolla28/' target='_blank'>
            Hasib
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
