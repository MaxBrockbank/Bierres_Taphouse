import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return(
    <React.Fragment>
      <div>
        <h3>{props.name}</h3>
        <h4>${props.price} Per Pint</h4>
        <button>Buy Pint</button>
        <button>Restock</button>
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  ABV: PropTypes.number,
  quantityL: PropTypes.number
}
export default Beer;