// Write your code here.

import './index.css'

import {Component} from 'react'

class GetItem extends Component {
  state = {showAnswerText: false}

  clicked = () => {
    this.setState(previousState => ({
      showAnswerText: !previousState.showAnswerText,
    }))
  }

  render() {
    const {content} = this.props
    const {showAnswerText} = this.state
    const {questionText, answerText} = content
    return showAnswerText ? (
      <li className="li">
        <div className="questionContainer">
          <h1 className="h2">{questionText}</h1>
          <button type="button" onClick={this.clicked} className="button">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        </div>

        <hr className="hr" />
        <p className="p1">{answerText}</p>
      </li>
    ) : (
      <li className="li">
        <div className="questionContainer">
          <h1 className="h2">{questionText}</h1>
          <button type="button" onClick={this.clicked} className="button">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default GetItem
