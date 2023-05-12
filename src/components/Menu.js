import React, { Fragment } from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Container, Button } from 'semantic-ui-react';

import NavBar from './NavBar';

import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <Fragment>
    <NavBar seat={props.seat} priceTotal={props.priceTotal}>
      
    </NavBar>
    <Container id='page-container'>
      <Header as='h1' id='page-header'>Movie Selection</Header>
      <Container textAlign='center' id='menu-free-banner'>

      </Container>
      <Container id='menu-pizza-container'>
          <PizzaContainer book={props.book} />
      </Container>
    </Container>
  
  </Fragment>
);

Menu.propTypes = {
  seat: PropTypes.array,
  priceTotal: PropTypes.number,
  book: PropTypes.func.isRequired
};

export default Menu;
