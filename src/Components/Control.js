import React from 'react';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm'

class Control extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formVisible: false,
      masterBeerList:[],
      selectedBeer:null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selected != null){
      this.setState({
        formVisible: false,
        selectedBeer: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddToQuantity = () => {

  }

  handleSubFromQuantity = () => {

  }

  render(){

    let buttonText = null;
    let currentComponent = null;

    if(this.state.formVisible !== false){
      currentComponent = <NewBeerForm />
      buttonText = "Return to beer list"
    } else {
      currentComponent = <BeerList />
      buttonText = "Add new beer"
    }
    return(
      <React.Fragment>
        {currentComponent}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default Control;