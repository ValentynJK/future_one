// react-router, react
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
// components
import Button from '../../components/button/button.component';
import DropDownIcon from '../../components/drop-down-icon/drop-down-icon.component'
import PopupWindow from '../../components/popup-window/popup-window.component'
//data 
import { NAVIGATION } from '../../data/navigation';
// styles
import './navigation-bar.styles.scss'


const NavigationBar = () => {

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
      <div className="navigation-bar-container">
        <div className="logo-container">
          <Link to='/'>
            <span>Future one</span>
          </Link>
        </div>
        <nav className={` ${isOpen ? 'mobile' : 'none'} navigation-bar-links-container`}>
          {NAVIGATION.map((el, index) => (
            <NavLink key={index} to={el.path} className="nav-link">
              {el.name}
            </NavLink>
          ))}
          <div className="navigation-bar-button-container">
            <Button onClick={togglePopup} children={'Contact Us'} buttonType={'navigation'} />
          </div>
        </nav>
        <div onClick={onClickHandler} className='close-open-button'>
          <DropDownIcon isOpen={isOpen} />
        </div>
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

export default NavigationBar;