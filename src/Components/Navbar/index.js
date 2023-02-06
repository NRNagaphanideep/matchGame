import './index.css'

const Navbar = props => {
  const {score, time} = props

  return (
    <div className="header-container">
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="logo"
          alt="website logo"
        />
        <ul className="score-timer-container">
          <li className="score-name">
            <p className="score-heading">
              Score: <span className="score">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-logo"
              alt="timer"
            />
            <p className="time">{time}sec</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
