// react-router-dom
import { Outlet } from 'react-router-dom';
// components
import SVG from '../../components/svg/svg.component';
// data
import { SOCIAL_LINKS } from '../../data/socialLinks';
// styles
import './footer.styles.scss'

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer>
        <div className="product-and-collaboration-container">
          <div className="footer-list products">
            <h3 className="footer-name">Products</h3>
            <ul>
              <li>Tiramisu chocolate</li>
              <li>Pastry tart</li>
              <li>Pllipop brownie</li>
            </ul>
          </div>
          <div className="footer-list collaboration">
            <h3 className="footer-name">Collaboration</h3>
            <ul>
              <li>Tiramisu chocolate</li>
              <li>Pastry tart</li>
              <li>Pllipop brownie</li>
            </ul>
          </div>
          <div className="social-links">
            {SOCIAL_LINKS.map((social, index) => {
              const { name, link, label, svg: { width, height, viewBox, fill, d } } = social
              return (
                <a target='_blank' aria-label={label} name={name} href={link} rel="noreferrer"><SVG key={index} width={width} height={height} viewBox={viewBox} fill={fill} d={d} /></a>
              )
            })}
          </div>
        </div>
        <div className="legal-details">
          <p>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Proud to be Open Source</p>
        </div>
      </footer>
    </>
  )
}

export default Footer 