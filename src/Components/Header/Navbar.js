import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <ul className={styles.container}>
        <p>
            Logo
        </p>
        <Link className={styles.items} to="/">
          <li>Home</li>
        </Link>
        <Link className={styles.items} to="/about">
          <li>About</li>
        </Link>
        <Link className={styles.items} to="/services">
          <li>Services</li>
        </Link>
        <Link className={styles.items} to="/products">
          <li>Products</li>
        </Link>
        <Link className={styles.items} to="/contact">
          <li>Contact</li>
        </Link>
        <Link className={styles.items} to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
