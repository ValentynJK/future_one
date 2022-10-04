// react
import { useState } from 'react';
// components
import Button from '../../components/button/button.component'
import PopupWindow from '../../components/popup-window/popup-window.component';
// styles
import './banner.styles.scss';
import bannerPhoto from '../../assets/pexels-andrea-piacquadio-3769021.png'

const Banner = () => {

  const [popupTrigger, setPopupTrigger] = useState(false);
  const togglePopup = () => {
    setPopupTrigger(true)
  }

  return (
    <section className="banner-container">
      <article className="banner-text-container">
        <header className="banner-name">
          <h1>
            <span className='banner-name-span'>Duis aute irure</span> dolor in reprehenderit
          </h1>
        </header>
        <div className="banner-text">
          <p>Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas. </p>
        </div>
        <Button onClick={togglePopup} children={'Discover Now'} buttonType={'standard'} />
      </article>
      <div className="banner-photo">
        <div className="background-photo" style={{
          backgroundImage: `url(${bannerPhoto})`
        }}>
        </div>
      </div>
      <PopupWindow trigger={popupTrigger} setPopupTrigger={setPopupTrigger} >
        <h2>Discover Now</h2>
      </PopupWindow>
    </section >
  )
}

export default Banner