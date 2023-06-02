import React from 'react';
import './styles.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <div className="row">
            <div className="logo">I hope you liked my website</div>
            <p className="text-footer">If you want to communicate with me or are interested in my services for a project, get in touch.</p>
            <div className="info">
              <div className="list border-list text-start">
                <label>
                  <i className="bx bxs-phone"></i>Phone:
                </label>
                <p>+584124274922</p>
              </div>
              <div className="list text-start">
                <label>
                  <i className="bx bxl-google"></i> Email:
                </label>
                <p>
                  <a href="mailto:jesusamg1997@gmail.com?Subject=Interesado%20en%20su%20servicio">jesusamg1997@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div className="copyright">
        <Container>
          <p>Jesus 2023 &copy; All rights reserved</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
