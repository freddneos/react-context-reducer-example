import React from 'react'
import Articles from './containers/Articles'
import AddArticle from './components/AddArticle/AddArticle'
import ArticleProvider from './contexts/articleContext'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <ArticleProvider>
        <AddArticle />
        <Articles />
      </ArticleProvider>
    </Container>

  );
}

export default App;
