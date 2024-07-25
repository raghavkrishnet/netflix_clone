import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './Homebanner.css';


function Homebanner() {

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login')
  }
  return (
    <div className="home_banner">
      <div className="home_banner_background">
        <img
          className="home_banner_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        <div className="container mt-5">
          <div className="language_signin_container">
            <div className="dropdown">
              <button
                className="language_btn dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li><button className="dropdown-item" type="button">English</button></li>
                <li><button className="dropdown-item" type="button">Hindi</button></li>
              </ul>
            </div>
            <button className="signin_btn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="home_banner_gradient"></div>
        </div>

        <div className="home_banner_body">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

          <div className="home_banner_input">
            <form>
              <input type="email" placeholder="Email address" />
              <button className="signin_getStarted">Get Started
                <FontAwesomeIcon icon={faCaretRight} className="ms-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;
