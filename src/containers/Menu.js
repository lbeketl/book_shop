import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';


const mapStateToProps = ({ cart, count }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, obj => obj.id)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);