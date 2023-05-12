import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Header, Menu, Button } from 'semantic-ui-react';



class Confirmation extends Component {
  static propTypes = {
    customerDetails: PropTypes.object,
    clearState: PropTypes.func.isRequired
  }

  state = {
    newOrder: false
  }

  handleClick = () => {
    this.props.clearState();
    this.setState({ newOrder: true });
  }

  render(){
    if(this.state.newOrder) {
      return <Redirect push to='/' />;
    }

    const { firstName } = this.props.customerDetails;

    return(
      <Fragment>
      <Menu secondary id='navbar'>
        <Menu.Item header id='navbar-header'>Movies</Menu.Item>
      </Menu>
        <Container textAlign='center' id='confirmation-container'>
          <Header as='h1' id='page-header'>Thanks, {firstName}!</Header>
          <p id='confirmation-text'>Your Booking is successfull!!!! </p>
         
          <p>Tickets sent to your mail, Enjoy your movie!!!!  </p>
          
          <Button onClick={this.handleClick} color='teal' size='large' id='confirmation-new-btn'>Book new tickects or logout</Button>
        </Container>
    
      </Fragment>
    )
  }
};

export default Confirmation;
