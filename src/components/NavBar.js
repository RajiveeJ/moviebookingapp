import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';


class NavBar extends Component{

  static propTypes = {
    priceTotal: PropTypes.number
  }

  render(){
    return(
      <Menu fixed='top' borderless id='navbar'>
        <Container>
          <Menu.Item as={Link} to='/menu' id='navbar-header'>Movies</Menu.Item>
         
        </Container>
      </Menu>
    )
  }
}

export default NavBar;
