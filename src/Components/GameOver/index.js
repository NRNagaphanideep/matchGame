import './index.css'

const GameOver = props => {
  const {score, playAgain} = props
  return (
    <div className="game-over-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="main-heading">YOUR SCORE</p>
      <p className="your-score">{score}</p>
      <button className="play-button" type="button" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="restart"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
