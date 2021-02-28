import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from './../actions/books';
import App from './../components/App.jsx';
import orderBy from 'lodash/orderBy.js';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'hight_price':
      return  orderBy(books, 'price', 'desc');
    case 'low_price':
      return  orderBy(books, 'price', 'asc');
     case 'author':
       return orderBy(books, 'author', 'asc');
     default:
       return books; 
  }
}

const filterBooks = (books, searchQuery) => {
   return books.filter(obj =>
    obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,)

}

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
}

const mapStateToProps = ({ books, filter }) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);