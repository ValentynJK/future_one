// styles, images
import invsion from '../../assets/invision.png'
import './quotes.styles.scss'
// data
import { QUOTE_MARK } from '../../data/quote-mark'
// components
import SVG from '../../components/svg/svg.component'

const Quotes = () => {
  return (
    <section className="quote-container">
      <div className="quote-name-container">
        <h3>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</h3>
      </div>
      <div className="quote-content-container">
        <div className="quotes">
          <SVG className='arrow' width={QUOTE_MARK.width} height={QUOTE_MARK.height} viewBox={QUOTE_MARK.viewBox} fill={QUOTE_MARK.fill} d={QUOTE_MARK.d} />
          <SVG className='arrow' width={QUOTE_MARK.width} height={QUOTE_MARK.height} viewBox={QUOTE_MARK.viewBox} fill={QUOTE_MARK.fill} d={QUOTE_MARK.d} />
        </div>
        <div className="quote-text-container">
          <p>
            Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla.
          </p>
        </div>
        <div className="quote-end-container">
          <p>Faucibus Vitae, Office Assistant</p>
          <div className="quotes rotated-quotes">
            <SVG className='arrow' width={QUOTE_MARK.width} height={QUOTE_MARK.height} viewBox={QUOTE_MARK.viewBox} fill={QUOTE_MARK.fill} d={QUOTE_MARK.d} />
            <SVG className='arrow' width={QUOTE_MARK.width} height={QUOTE_MARK.height} viewBox={QUOTE_MARK.viewBox} fill={QUOTE_MARK.fill} d={QUOTE_MARK.d} />
          </div>
        </div>
        <div className="quote-reference">
          <img src={invsion} alt="invision" />
        </div>
      </div>
    </section>
  )
}

export default Quotes