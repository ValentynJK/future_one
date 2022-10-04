// components
import ProductItem from '../../components/product-item/product-item.component'
// data
import { PRODUCTS } from '../../data/products'
// styles
import './products.styles.scss'

const Products = () => {
  return (
    <section className="products-section-container">
      <div className="product-section-name">
        <h2>Massa tempor nec feugiat nisl pretium fusce</h2>
      </div>
      <div className="product-section-text">
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam.
          Dictum varius duis at consectetur lorem donec massa sapien. Massa tempor nec feugiat nisl pretium fusce.
        </p>
        <br />
        <p>Elit scelerisque mauris pellentesque?</p>
      </div>
      <div className="products-list-container">
        {
          PRODUCTS.map((product, index) => (
            <ProductItem key={index} item={product.svg} />
          ))
        }
      </div>

    </section>
  )
}

export default Products