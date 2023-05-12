import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import {  Container } from 'semantic-ui-react';


import Seat from './Seat';


class Paid extends Component {

  static propTypes = {
    priceTotal: PropTypes.number,
    book: PropTypes.func.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
    seat: PropTypes.array,
    updateCheckoutTotal: PropTypes.func.isRequired,
  }

  render(){
   

      return (
        <Fragment>
         
          <Container id='page-container'>
           
            <Container id='cart-empty-box'>
              <p id='cart-empty-text'>Your booking is successfull!!! tickets sent to mail, Enjoy movie!!!!</p>
              
            </Container>
          </Container>
         
        </Fragment>
      )
    

    
  }
}

export default Paid;
