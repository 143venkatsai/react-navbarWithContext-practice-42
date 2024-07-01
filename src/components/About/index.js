import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="about-container">
            {isDarkTheme ? (
              <div className="about-dark-theme-container about-theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="about-logo"
                  alt="about"
                />
                <h1 className="about-heading dark">About</h1>
              </div>
            ) : (
              <div className="about-light-theme-container about-theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="about-logo"
                  alt="about"
                />
                <h1 className="about-heading light">About</h1>
              </div>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
