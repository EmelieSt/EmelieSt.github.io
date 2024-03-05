import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CSS/NavbarFooter.css';

const Navbar = () => {
  return (
    <nav className={styles.links}>
      <Link id='Home' to="/"> 
        <h1>Emelie Stråth</h1>
      </Link>
      <div>
        <Link to="/Portfolio">Min Portfolio</Link>
        <Link to="/CV">Min CV</Link>
        <Link to="/About">Kontaktinformation</Link>
      </div>
    </nav>
  );
};console.log(
    '%c Woohoo! 🎉 Welcome to the adventure! 🚀',
    'color: #ff7f50; font-size: 14px; font-weight: bold;'
  );
  console.log(
    '%c Ready to explore? Let the journey begin! 🌟',
    'color: #32cd32; font-size: 14px; font-weight: bold;'
  );
  
export default Navbar