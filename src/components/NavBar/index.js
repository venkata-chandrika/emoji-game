// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isInProgress} = props
  return (
    <nav className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      {isInProgress ? (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          {isInProgress ? <p className="total">Top Score: {topScore}</p> : ''}
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
