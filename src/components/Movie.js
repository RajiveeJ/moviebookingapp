import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice } from '../helpers';


class Movie extends Component {
  static propTypes = {
    book: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired
  }
  
   
  render(){
    const {name, image, price } = this.props.details;
    return(
      <Grid.Column mobile={5} tablet={8} computer={5}>
        <Segment id='movie-card' raised>
          <Image src={image} />
          <Header as='h3'>{name}</Header>
            <div id='movie-book-info'>
            <Header as='h3'>{formatPrice(price)}</Header>
            <p>
              <Button onClick={()=>this.props.book(this.props.index)} color='teal'>Book</Button>
              <Button as={Link} to='/cart' color='teal' id='menu-checkout-btn'>Checkout</Button>
            </p>
          </div>

        </Segment>
      </Grid.Column>
    )
  }
}

export default Movie;
