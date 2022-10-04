import './articles.styles.scss'
import { ARTICLES } from '../../data/articles'
import Article from '../../components/article/article.component'

const Articles = () => {
  return (
    <section className='articles-container'>
      <header>
        <h1>Lacinia quis vel eros tempor orci.</h1>
      </header>
      <article>
        {ARTICLES.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </article>
    </section>
  )
}

export default Articles