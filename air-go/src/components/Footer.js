import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles["footer"]}>
        <Container>
        <p className="text-white text-center mb-0">Copyright © 2023 AirGo</p>
        <ul className="list-unstyled d-flex justify-content-center footer-links">
          <li className="mx-3"><a href=".#" className="text-white">Privacy Policy</a></li>
          <li className="mx-3"><a href=".#" className="text-white">Terms of Use</a></li>
          <li className="mx-3"><a href=".#" className="text-white">Contact Us</a></li>
        </ul>
      </Container>
      </footer>
    );
  };
  
  export default Footer;


