// sections
import Banner from "../../sections/1_banner/banner.section"
import Articles from "../../sections/2_articles/articles.section"
import Quotes from "../../sections/3_quotes/quotes.section"
import Products from "../../sections/4_products/products.section"
import Subscriptions from "../../sections/5_subscription/subscriptions.section"

const Overview = () => {
  return (
    <>
      <Banner />
      <Articles />
      <Quotes />
      <Products />
      <Subscriptions />
    </>
  )
}

export default Overview