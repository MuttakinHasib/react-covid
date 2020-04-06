import React from 'react';

const Spinner = () => {
  return (
    <div className='text-center mt-5'>
      <div className='spinner-border text-light' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
