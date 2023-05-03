import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { MovieList } from '../data/movies';
import Movie from './Movie';

const PizzaContainer = (props) => {
  let pizzas = Object.keys(MovieList).map( key => {
    return <Movie
              key={key}
              details={MovieList[key]}
              book={props.book}
              index={key}
            />
  });
  return (
      <Grid stackable columns={3}>
        {pizzas}
      </Grid>
  );
}

PizzaContainer.propTypes = {
  book: PropTypes.func.isRequired
};

export default PizzaContainer;
