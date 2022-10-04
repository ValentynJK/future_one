// react, react-router
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// components
import Button from '../button/button.component'
import DropDownIcon from '../drop-down-icon/drop-down-icon.component'
import PopupWindow from '../popup-window/popup-window.component'
// data
import { NAVIGATION } from '../../data/navigation'
// styles
import './drop-down-nav.styles.scss'

const DropDownNavigation = () => {

  const [popupTrigger, setPopupTrigger] = useState(false);
  const togglePopup = () => {
    setPopupTrigger(true)
  }

  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen &&
        <nav className="drop-down-list-container">
          <div className="drop-down-content">
            {NAVIGATION.map((el, index) => (
              <NavLink key={index} to={el.path} className="nav-link drop-down">
                {el.name}
              </NavLink>
            ))}
            <div className="drop-down-navigation-button-container">
              <Button onClick={togglePopup} children={'Contact Us'} buttonType={'navigation'} />
            </div>
          </div>
        </nav>
      }
      <div onClick={onClickHandler} className='close-open-button'>
        <DropDownIcon isOpen={isOpen} />
      </div>
      <PopupWindow trigger={popupTrigger} setPopupTrigger={setPopupTrigger}>
        <h2>
          Contact Us
        </h2>
        <address>
          <span>
            Written by <a href="mailto:webmaster@example.com">Jon Doe</a>
          </span>
          <span>
            ul. Wróblewskiego Walerego 58
          </span>
          <span>78 294 91 12</span>
        </address>
      </PopupWindow>
    </>
  )
}

export default DropDownNavigation;