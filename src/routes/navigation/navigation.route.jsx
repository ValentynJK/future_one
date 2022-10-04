// react-router, react
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
// components
import Button from '../../components/button/button.component'
import DropDownNavigation from '../../components/drop-downNav/drop-down-nav.component'
import PopupWindow from '../../components/popup-window/popup-window.component'
// data
import { NAVIGATION } from '../../data/navigation'
// styles
import './navigation.styling.scss'

const Navigation = () => {

  const [popupTrigger, setPopupTrigger] = useState(false);

  const togglePopup = () => {
    setPopupTrigger(true)
  }

  return (
    <>
      <div className="navigation-container">
        <div className="logo">
          <Link to='/'>
            <span>
              Future one
            </span>
          </Link>
        </div>
        <nav className="nav-links-container">
          {NAVIGATION.map((el, index) => (
            <NavLink key={index} to={el.path} className="nav-link">
              {el.name}
            </NavLink>
          ))}
        </nav>
        <div className="navigation-button-container">
          <Button onClick={togglePopup} children={'Contact Us'} buttonType={'navigation'} />
        </div>
        <DropDownNavigation />
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
      <Outlet />
    </>
  )
}

export default Navigation