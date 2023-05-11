// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickedEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onClickEmoji = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
