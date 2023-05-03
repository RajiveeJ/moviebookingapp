import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Segment, Icon } from 'semantic-ui-react';
import { MovieList } from '../data/movies';
import { formatPrice } from '../helpers';

class Seat extends Component {

  static propTypes = {
    book: PropTypes.func.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
    seat: PropTypes.array
  }

  renderOrder = (key) => {
    const movie = MovieList[key];
    const count = this.props.seat[key];

    return(
      <Segment raised key={key}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={movie.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p id='order-pizza-name'>{movie.name}</p>
              <p><strong>{formatPrice(movie.price)}</strong></p>
              <p>
                <Icon name='minus' circular id="order-minus" onClick={() => this.props.removeFromOrder(key)} /> seats: {count}
                <Icon name='plus' circular id="order-plus" onClick={() => this.props.book(key)} />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  render(){
    const seatIds = Object.keys(this.props.seat);

    return(
      <div>
          {seatIds.map(this.renderOrder)}
      </div>
    );
  }
}

export default Seat;
