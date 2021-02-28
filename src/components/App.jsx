import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import Filter from '../containers/Filter';
import BookCard from '../containers/BookCard';
import Menu from './../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady, setFilter } = this.props;
    return (
      <Container>
        <Menu />
        <Filter setFilter={setFilter}/>
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;