import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="not-found-container">
            {isDarkTheme ? (
              <div className="not-found-dark-theme-container not-found-theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-img"
                  alt="not found"
                />
                <h1 className="not-found-heading dark">Lost Your Way?</h1>
                <p className="not-found-description dark-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            ) : (
              <div className="not-found-light-theme-container not-found-theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-img"
                  alt="not found"
                />
                <h1 className="not-found-heading light">Lost Your Way?</h1>
                <p className="not-found-description light-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
