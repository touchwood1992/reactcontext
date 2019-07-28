import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo_container'>
          <Link to='/'>
            <i className='fa fa-github github_icon' />
            Github Find
          </Link>
        </div>

        <div className='menu_container'>
          <ul className='main_menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
