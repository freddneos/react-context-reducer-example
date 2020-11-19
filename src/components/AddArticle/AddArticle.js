import React, { useState, useContext, Fragment } from "react";
import { ArticleContext } from '../../contexts/articleContext'
import { Button, Form, Container } from 'react-bootstrap';
import "./AddArticle.css"


const AddArticle = () => {
    const { dispatch } = useContext(ArticleContext);
    const [article, setArticle] = useState()

    const handleArticleData = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value,
        })
    }

    const addNewArticle = e => {
        e.preventDefault()
        dispatch({ type: "ADD_ARTICLE", article });
    }

    return (
        <Container className="mySection">
            <Form onSubmit={addNewArticle}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Title of you article" onChange={handleArticleData} id="title" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Article</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="your article content here" onChange={handleArticleData} id="body" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
            </Button>
            </Form>
        </Container>

    )
}

export default AddArticle