import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';
import { Grid, Container, Header, Button } from 'semantic-ui-react';
import { formatPrice } from '../helpers';
import { Link  } from 'react-router-dom';

import NavBar from './NavBar';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentForm from './PaymentForm';


class Checkout extends Component {

  static propTypes = {
    priceTotal: PropTypes.number,
    customerDetails: PropTypes.object,
    loadSampleCustomer: PropTypes.func.isRequired,
    updateCustomerDetails: PropTypes.func.isRequired,
    checkoutTotal: PropTypes.number
  }

  state = {
    customerForm: false,
    paymentForm: false,
    completedForm: false
  }

  checkPaymentForm = (bool) => {
    this.setState({ paymentForm: bool});
  }

  checkCustomerForm = () => {
    const { firstName, lastName, email, contactNum, address } = this.props.customerDetails;

    if (firstName && lastName && email && contactNum && address) {
      this.setState({ customerForm: true });
    } else {
      this.setState({ customerForm: false });
    }
  }

  handleSubmit = () => {
    
      alert("Successfully booked and tickets sent to your mail!!!! Enjoy your movie time!!!");
     
    
  }

  render(){
    if (this.state.completedForm) {
    return <Redirect push to='/confirmed' />;
    }

    return(
      <Fragment>
        <NavBar priceTotal={this.props.priceTotal}/>
        <Container id='page-container'>
          <Header as='h1' id="page-header">Book now</Header>
          <Grid stackable columns={2}>
            <Grid.Column width={10}>
              <Header as='h3' id='checkout-subheader'>Your Details</Header>
              <CustomerDetailsForm
                customerDetails={this.props.customerDetails}
                updateCustomerDetails={this.props.updateCustomerDetails}
                loadSampleCustomer={this.props.loadSampleCustomer}
                formStatus={this.checkCustomerForm}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as='h3' id='checkout-subheader'>Payment</Header>
              <Elements>
                <PaymentForm formStatus={this.checkPaymentForm} />
              </Elements>
              <a class="nav-link" href="/cart">Pay now {formatPrice(this.props.checkoutTotal)}</a>
              <Button color='teal' size='large' id='checkout-btn' as={Link} to='/confirmed'>Book & Pay {formatPrice(this.props.checkoutTotal)} </Button>
            </Grid.Column>
          </Grid>
        </Container>
       
      </Fragment>
    )
  }
}

export default Checkout;
