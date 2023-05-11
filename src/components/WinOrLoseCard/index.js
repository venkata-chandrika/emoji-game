// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  console.log(props)
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'
  return (
    <div className="card-container">
      <div className="win-container">
        <h1 className="status">{status}</h1>
        <div className="score-card">
          <p className="score-status">{scoreStatus} </p>
          <p className="points">{score}/12</p>
          <button
            className="play-again"
            type="button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLossCard
