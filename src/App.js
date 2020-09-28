import React, { Component } from "react";
import Title from "./components/Title/title";
import Buttons from "./components/Button/button";
import Livres from "./containers/Livres/livres";

class App extends Component {
  state = {
    buttonAddBook: false,
  };
  AddBookHandler = () => {
    this.setState((oldState, props) => {
      return { buttonAddBook: !oldState.buttonAddBook };
    });
  };
  render() {
    return (
      <div className="container">
        <Title>Tous nos livres!</Title>
        <Livres ajoutLivre={this.state.buttonAddBook} closeAddBook={()=>this.setState({buttonAddBook:false})}/>
        <Buttons css="w-100" btnType="btn-success" clic={this.AddBookHandler}>
          {!this.state.buttonAddBook ? "Ajouter" : "Fermer l'ajout"}
        </Buttons>
      </div>
    );
  }
}

export default App;
