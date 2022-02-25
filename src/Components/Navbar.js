import React from 'react';
import Hero from './Hero';

export default function Navbar() {
  return (
    <>
      {/* Main Container */}

      <div
        className='container-fluid bg-image'
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/rezume/images/ximage_1.jpg.pagespeed.ic.X2zR0KHyU5.webp')",
          backgroundSize: 'cover',
          opacity: '0.9',
          backgroundPosition: 'center',
        }}
      >
        {/* Navbar Is Here */}

        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse justify-content-center'
              id='navbarNavAltMarkup'
            >
              <div className='navbar-nav py-3 text-light'>
                <a className='nav-link active' aria-current='page' href='#'>
                  HOME
                </a>
                <a className='nav-link active' aria-current='page' href='#'>
                  PORTFOLIO
                </a>
                <a className='nav-link active' aria-current='page' href='#'>
                  RESUME
                </a>
                <a className='nav-link active' aria-current='page' href='#'>
                  ABOUT
                </a>
                <a className='nav-link active' aria-current='page' href='#'>
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section Here */}

        <Hero />
      </div>
    </>
  );
}
