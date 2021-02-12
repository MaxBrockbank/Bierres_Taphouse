import React from 'react';
import BeerDetails from './BeerDetails';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import EditBeerForm from './EditBeerForm';

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

  // handleAddToQuantity = () => {

  // }

  // handleSubFromQuantity = () => {

  // }

  handleAddNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      formVisible: false
    })
  }

  render(){

    let buttonText = null;
    let currentComponent = null;

    if(this.state.editing){
      currentComponent = <EditBeerForm beer = {this.state.selectedBeer} onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Return to beer list";
    } else if(this.state.selectedBeer !== null){
      currentComponent = <BeerDetails beer={this.state.selectedBeer} onClickingDelete = {this.handleDeletingBeer} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to beer list"
    }else if(this.state.formVisible){
      currentComponent = <NewBeerForm onNewBeerCreation = {this.handleAddNewBeerToList}/>
      buttonText = "Return to beer list"
    } else {
      currentComponent = <BeerList beerList={this.state.masterBeerList} onBeerSelection={this.handleChangingSelectedBeer}/>
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