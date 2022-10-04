// react 
import { useState } from 'react';
// components
import PlusMinusButton from '../plusMinusButton/plusMinusButton.component';
// styles
import './article.styles.scss'

const Article = ({ article }) => {
  const { number, name, text } = article;

  const [isPlus, setIsPlus] = useState(true)

  const onClickHandler = () => {
    setIsPlus(!isPlus)
  }

  return (
    <div className='article-container'>
      <div className="article-content">
        <div className="number-container">
          {`${number}.`}
        </div>
        <div className="article-name-container">
          {name}
        </div>
        {
          !isPlus && (<div className="article-text-container">
            {text}
          </div>)
        }
      </div>
      <div onClick={onClickHandler}>
        <PlusMinusButton isPlus={isPlus} />
      </div>
    </div>
  )
}

export default Article