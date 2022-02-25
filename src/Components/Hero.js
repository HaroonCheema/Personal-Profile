import React from 'react';

export default function Hero() {
  return (
    <>
      <div
        className='container-fluid text-center d-flex align-items-center'
        style={{ height: '700px' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 text-light'>
              <h1 className='display-3'>Hello, I'm</h1>
              <h1 className='display-3 fw-bolder'>Charles Anderson</h1>
              <h6>AND THIS IS MY REZUME</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
