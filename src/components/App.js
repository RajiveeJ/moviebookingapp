import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';
import { MovieList } from '../data/movies';
import { sampleCustomer } from '../data/sampleCustomer';


import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';
import Paid from './Paid';
import Confirmation from './Confirmation';

class App extends Component {

  state = {
    seat: [],
    priceTotal: 0,
    checkoutTotal: 0,
    
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      contactNum: '',
      address: '',
    }
  }

  componentDidMount(){
    const localStorageOrder = localStorage.getItem('seat');
    const localStorageOrderAmount = localStorage.getItem('Amount');
    const localStorageTotal = localStorage.getItem('total');
    const localStorageCustomerDetails = localStorage.getItem('customerDetails');
    if(localStorageOrder) {
      this.setState({
        seat: JSON.parse(localStorageOrder),
        priceTotal: JSON.parse(localStorageOrderAmount),
        checkoutTotal: JSON.parse(localStorageTotal),
        customer: JSON.parse(localStorageCustomerDetails)
      });
    }
  }

  componentDidUpdate(){
    localStorage.setItem('seat', JSON.stringify(this.state.seat));
    localStorage.setItem('Amount', JSON.stringify(this.state.priceTotal));
    localStorage.setItem('total', JSON.stringify(this.state.checkoutTotal));
    localStorage.setItem('customerDetails', JSON.stringify(this.state.customer));
  }

  book = (key) => {
    const seat = { ...this.state.seat};
    seat[key] = seat[key] + 1 || 1;
    const newTotal = this.state.priceTotal + MovieList[key].price;

    this.setState({
      seat: seat,
      priceTotal: newTotal
    });
  }

  removeFromOrder = (key) => {
    const seat = { ...this.state.seat};
    seat[key] = seat[key] - 1;
    let newTotal = this.state.priceTotal - (MovieList[key].price);

    if(seat[key] === 0) {
      newTotal = this.state.priceTotal - MovieList[key].price;
      delete seat[key];
    }

    this.setState({
      seat: seat,
      priceTotal: newTotal
    });
  }

  updateCheckoutTotal = (newTotal) => {
    this.setState({
      checkoutTotal: newTotal
    });
  }

  updateCustomerDetails = (updatedCustomerDetails) => {
    let customerDetails = {...this.state.customer};
    customerDetails = updatedCustomerDetails;
    this.setState({
      customer: customerDetails
    });
  }

  

  loadSampleCustomer = () => {
    this.setState({ customer: sampleCustomer })
  }

  clearState = () => {
    this.setState({
      seat: [],
      priceTotal: 0,
      checkoutTotal: 0,

      customer: {
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        address: '',
    }
  });
}

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' render={ (props) =>
              <Home {...props}
              updatePostcode={this.updatePostcode} /> } />
            <Route exact path='/menu' render={ (props) =>
              <Menu {...props}
                priceTotal={this.state.priceTotal}
                book={this.book}
                seat={this.state.seat} /> } />
            <Route exact path='/cart' render={ (props) =>
              <Cart {...props}
                priceTotal={this.state.priceTotal}
                book={this.book}
                removeFromOrder={this.removeFromOrder}
                seat={this.state.seat}
                updateCheckoutTotal={this.updateCheckoutTotal} /> } />
    <Route exact path='/paid' render={ (props) =>
              <Paid {...props}
                priceTotal={this.state.priceTotal}
                book={this.book}
                removeFromOrder={this.removeFromOrder}
                seat={this.state.seat}
                updateCheckoutTotal={this.updateCheckoutTotal} /> } />
            <Route exact path='/checkout' render={ (props) =>
              <StripeProvider apiKey='pk_test_12345'>
                <Checkout {...props}
                  priceTotal={this.state.priceTotal}
                  customerDetails={this.state.customer}
                  checkoutTotal={this.state.checkoutTotal}
                  updateCustomerDetails={this.updateCustomerDetails}
                  loadSampleCustomer={this.loadSampleCustomer} />
              </StripeProvider> }
            />
                   
          <Route exact path='/confirmed' render={ (props) =>
              <Confirmation {...props}
                customerDetails={this.state.customer}
                clearState={this.clearState}
                />
                   
              }
          />
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
