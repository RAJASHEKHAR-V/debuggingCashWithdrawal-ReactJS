import './index.css'

// Bugs are identified as follows

// 1. Props are accessed through class component instance "this"
// 2. Event function of button is not declared
// 3. Event functional component event function is assigned through "this" key word

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
