// styles
import './plusMinusButton.style.scss'

const PlusMinusButton = ({ isPlus }) => {
  return (
    (isPlus ?
      <span className="material-symbols-outlined plus">add_circle</span>
      :
      <span className="material-symbols-outlined minus">do_not_disturb_on</span >
    )
  )
}

export default PlusMinusButton