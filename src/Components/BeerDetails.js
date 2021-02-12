import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props){
  return(
    <React.Fragment>
        <h3>{brand}</h3>
        <h3>{name}</h3>
        <h4>${price} Per Pint</h4>
        <h4>ABV</h4>
        <button>Buy Pint</button>
        <button>Restock</button>
        <button>Edit Beer</button>
    </React.Fragment>
  );
}

BeerDetails.propTypes = {

}
export default BeerDetails;