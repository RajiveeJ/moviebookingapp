import React, { Component, Fragment } from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, Header } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

import NavBar from './NavBar';
import Seat from './Seat';


class Cart extends Component {

  static propTypes = {
    priceTotal: PropTypes.number,
    book: PropTypes.func.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
    seat: PropTypes.array,
    updateCheckoutTotal: PropTypes.func.isRequired,
  }

  render(){
    const totalMoviePrice = this.props.priceTotal;
    const deliveryPrice = this.props.priceTotal < 1200 ? 500 : 0;
    const checkoutTotal = totalMoviePrice + deliveryPrice;

    if (this.props.priceTotal === 0) {
      return (
        <Fragment>
          <NavBar priceTotal={this.props.priceTotal}/>
          <Container id='page-container'>
            <Header as='h1' id='page-header'>Movie selected</Header>
            <Container id='cart-empty-box'>
              <p id='cart-empty-text'>Your booking is empty. Add some movie</p>
              <Button as={Link} to='/menu' color='teal' size='large'>Go to Movie</Button>
            </Container>
          </Container>
          <Footer />
        </Fragment>
      )
    }

    return(
      <Fragment>
        <NavBar priceTotal={this.props.priceTotal}/>
        <Container id='page-container'>
          <Container id='cart-header'>
            <Header as='h1' id='page-header'>Your Movie</Header>
            <Button as={Link} to='/menu' color='teal' size='large' id='cart-menu-btn'>Back to Movies</Button>
          </Container>
          <Container id='order-box'>
            <Order
              seat={this.props.seat}
              book={this.props.book}
              removeFromOrder={this.props.removeFromOrder}
            />
            <Container id='cart-total'>
              <p>Price: <strong>{formatPrice(totalMoviePrice)}</strong></p>
              <p>Booking (free over £12): <strong>{formatPrice(deliveryPrice)}</strong></p>
              <p>Total: <strong>{formatPrice(checkoutTotal)}</strong></p>
              <Button as={Link} to='/checkout' id='cart-checkout-btn' color='teal' onClick={() => this.props.updateCheckoutTotal(checkoutTotal)}>Go to Payment</Button>
            </Container>
            </Container>
          </Container>
          <Footer />
      </Fragment>
    );
  }
}

export default Cart;
