// react
import { useState } from 'react'
// components 
import SVG from '../svg/svg.component'
import PopupWindow from '../popup-window/popup-window.component'
// data
import { ARROW } from '../../data/arrow'
// styles
import './product-item.styles.scss'

const ProductItem = ({ item }) => {
  const { width, height, viewBox, fill, d } = item;

  const [popupTrigger, setPopupTrigger] = useState(false);
  const togglePopup = () => {
    setPopupTrigger(true)
  }

  return (
    <>
      <div onClick={togglePopup} className="product-item-container">
        <SVG className='product-svg' d={d} width={width} height={height} viewBox={viewBox} fill={fill} />
        <div className="details">
          <span>View details</span>
          <SVG className='arrow' width={ARROW.width} height={ARROW.height} viewBox={ARROW.viewBox} fill={ARROW.fill} d={ARROW.d} />
        </div>
      </div>
      <PopupWindow trigger={popupTrigger} setPopupTrigger={setPopupTrigger} >
        <h2>Product</h2>
      </PopupWindow>
    </>
  )
}

export default ProductItem