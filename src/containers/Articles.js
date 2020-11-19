import React, { Fragment, useContext } from 'react'
import { ArticleContext } from '../contexts/articleContext'
import Article from "../components/Article/Article"
import { Container } from 'react-bootstrap';


const Articles = () => {

    const { articles } = useContext(ArticleContext)

    return (
        <Fragment>
            <Container className="mySection">
                {articles.map(article => (
                    <Article key={article.id} article={article} />
                ))}
            </Container>
        </Fragment>

    )
}

export default Articles