import React from 'react';
import PropTypes from 'prop-types';
import * as $ from 'jquery';

function BeerDetails(props){
  const { beer } = props;
  return(
    <React.Fragment>
        <h3>{beer.brand}</h3>
        <h3>{beer.name}</h3>
        <h4>${beer.price} Per Pint</h4>
        <h4>{beer.ABV}%</h4>
        <h4>{beer.quantity}</h4>
        <input type="number" name="restock" id="restock"/>
        <button onClick={()=>props.onRestocking(beer.id, parseInt($("#restock").value))}>Restock</button>
        <button>Buy Beer</button>
        <button>Edit Beer</button>
    </React.Fragment>
  );
}

BeerDetails.propTypes = {

}
export default BeerDetails;