// styles
import './drop-down-icon.styles.scss'

const DropDownIcon = ({ isOpen }) => {

  return (
    <>
      <span className="material-symbols-outlined drop-down-icon">{isOpen ? 'close' : 'menu'}</span>
    </>
  )

}

export default DropDownIcon