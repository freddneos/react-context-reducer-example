import React from "react";
import "./Article.css"
import { Card, Button } from "react-bootstrap"

const Article = ({ article }) => (
    <Card className="myArticle">
        <Card.Header>Article id : {article.id}</Card.Header>
        <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
                {article.body}
            </Card.Text>

        </Card.Body>
    </Card>

)

export default Article