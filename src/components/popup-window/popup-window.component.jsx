// styles
import './popup-window.styles.scss'

const PopupWindow = ({ children, trigger, setPopupTrigger }) => {

  return trigger ? (
    <div className="popup-window-container">
      <div className="popup-window-content">
        {children}
        <span onClick={() => setPopupTrigger(false)} className="material-symbols-outlined popup-window">close</span>
      </div>
    </div>
  ) : '';
}

export default PopupWindow
