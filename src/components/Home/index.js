import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="home-container">
            {isDarkTheme ? (
              <div className="home-dark-theme-container home-theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  className="home-logo"
                  alt="home"
                />
                <h1 className="home-heading dark">Home</h1>
              </div>
            ) : (
              <div className="home-light-theme-container home-theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="home-logo"
                  alt="home"
                />
                <h1 className="home-heading light">Home</h1>
              </div>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
