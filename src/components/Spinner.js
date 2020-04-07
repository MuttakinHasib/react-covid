import React from 'react';
const Spinner = () => {
  return (
    <svg
      className='clock'
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 100 100'
      xmlSpace='preserve'
    >
      <circle
        cx='50'
        cy='50'
        r='48'
        fill='none'
        stroke='#f36'
        strokeMiterlimit='10'
        strokeWidth='4'
      ></circle>
      <path
        fill='none'
        stroke='rgb(29, 209, 161)'
        strokeLinecap='round'
        strokeMiterlimit='10'
        strokeWidth='4'
        d='M50 50L85 50.5'
      >
        <animateTransform
          attributeName='transform'
          dur='2s'
          from='0 50 50'
          repeatCount='indefinite'
          to='360 50 50'
          type='rotate'
        ></animateTransform>
      </path>
      <path
        fill='none'
        stroke='rgba(26, 16, 83, 0.603)'
        strokeLinecap='round'
        strokeMiterlimit='10'
        strokeWidth='4'
        d='M50 50L49.5 74'
      >
        <animateTransform
          attributeName='transform'
          dur='15s'
          from='0 50 50'
          repeatCount='indefinite'
          to='360 50 50'
          type='rotate'
        ></animateTransform>
      </path>
    </svg>
  );
};

export default Spinner;
