import React from 'react';
import ReusableForm from './ResuseableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props){

  function handleNewBeerFormSubmission(event){
    event.preventDefault();
    props.onNewBeerCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, ABV: event.target.ABV.value, quantity: event.target.quantity.value, id: v4()})
  }
  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewBeerFormSubmission} buttonText="Add new beer"/>
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;