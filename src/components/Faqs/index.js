// Write your code here.
import './index.css'

import GetItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main">
      <div className="card1">
        <h1 className="h1">FAQs</h1>
        <ul className="ul">
          {faqsList.map(eachItem => (
            <GetItem key={eachItem.id} content={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
