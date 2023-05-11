/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedIdList: [],
    isInProgress: true,
    topScore: 0,
  }

  finishGameSetTopScore = score => {
    const {topScore} = this.state
    let newScore = topScore

    if (score > newScore) {
      newScore = score
    }
    this.setState({
      topScore: newScore,
      isInProgress: false,
    })
  }

  onClickedEmoji = id => {
    const {clickedIdList} = this.state
    const {emojisList} = this.props
    const includesId = clickedIdList.includes(id)

    if (includesId) {
      console.log('Already exist')
      this.finishGameSetTopScore(clickedIdList.length)
    } else {
      if (emojisList.length - 1 === clickedIdList.length) {
        console.log('Top score')
        this.finishGameSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedIdList: [...prevState.clickedIdList, id],
      }))
      console.log(clickedIdList)
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getEmojisListCard = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {shuffledList.map(eachList => (
          <EmojiCard
            emojiDetails={eachList}
            addScore={this.addScore}
            clickedEmoji={this.onClickedEmoji}
            key={eachList.id}
          />
        ))}
      </ul>
    )
  }

  returnHomePage = () => {
    this.setState({clickedIdList: [], isInProgress: true})
  }

  finishCard = () => {
    const {emojisList} = this.props
    const {clickedIdList} = this.state
    const isWon = clickedIdList.length === emojisList.length

    return (
      <WinOrLossCard
        score={clickedIdList.length}
        isWon={isWon}
        onClickPlayAgain={this.returnHomePage}
      />
    )
  }

  render() {
    const {isInProgress, topScore, clickedIdList} = this.state

    return (
      <div className="container">
        <NavBar
          score={clickedIdList.length}
          topScore={topScore}
          isInProgress={isInProgress}
        />
        {isInProgress ? this.getEmojisListCard() : this.finishCard()}
      </div>
    )
  }
}

export default EmojiGame
