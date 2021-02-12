import React from 'react';
import ReusableForm from './ResuseableForm';
import PropTypes from 'prop-types';

function EditBeerForm(props){
  const { beer } = props;
  function handleEditBeerFormSubmission(event){
    event.preventDefault();
    props.onEditBeer({})
  }
  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler = {handleEditBeerFormSubmission} buttonText="Update beer" />
    </React.Fragment>
  )
}

EditBeerForm.propTypes = {
  beer:PropTypes.object,
  onEditBeer: PropTypes.func
}

export default EditBeerForm;