import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className='header'>
        <section>
        {/* banner text */}
          <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/booking"><button aria-label='On Click'>Reserver Table</button></Link>
            </div>
        </section>
    </header>

  );
};

export default Header;