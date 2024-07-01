import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => {
  const renderLightThemeContainer = toggleTheme => (
    <>
      <div className="light-theme-container header-theme-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          className="website-logo"
          alt="website logo"
        />
        <ul className="header-control-section">
          <Link to="/" className="link-item">
            <li className="control-name light">Home</li>
          </Link>
          <Link to="/about" className="link-item">
            <li className="control-name light">About</li>
          </Link>
        </ul>
        <button
          type="button"
          className="dark-theme-button button"
          onClick={() => toggleTheme()}
          data-testid="theme"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            className="theme-button"
            alt="theme"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </>
  )

  const renderDarkThemeContainer = toggleTheme => (
    <div className="dark-theme-container header-theme-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
        className="website-logo"
        alt="website logo"
      />
      <ul className="header-control-section">
        <Link to="/" className="link-item">
          <li className="control-name dark">Home</li>
        </Link>
        <Link to="/about" className="link-item">
          <li className="control-name dark">About</li>
        </Link>
      </ul>
      <button
        type="button"
        className="light-theme-button button"
        onClick={() => toggleTheme()}
        data-testid="theme"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
          className="theme-button"
          alt="theme"
        />
      </button>
    </div>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        return (
          <div className="header-container">
            {isDarkTheme
              ? renderDarkThemeContainer(toggleTheme)
              : renderLightThemeContainer(toggleTheme)}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
