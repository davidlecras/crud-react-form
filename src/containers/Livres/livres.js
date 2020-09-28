import React, { Component } from "react";
import AddNewBook from "./AddNewBook/addNewBook";
import ModifBook from "./ModifyBook/modifyBook";
import Livre from "./Livre/livre";
import Alert from "../../components/Alert/alert";

class Books extends Component {
  state = {
    livres: [
      {
        id: 1,
        title: "Le coeur a ses raisons",
        autor: "Georges W. Bush",
        pages: 300,
      },
      { id: 2, title: "Vive le code", autor: "Bill Gates", pages: 750 },
      { id: 3, title: "JS pour les nuls", autor: "El barto", pages: 50 },
    ],
    LastIdBook: 3,
    bookToModify: 0,
    alertMessage:{
      message: null,
      alertType: null
    }
  };

  bookSuppHandler = (id) => {
    const livreIndexTab = this.state.livres.findIndex((element) => {
      return element.id === id;
    });
    const newTabLivres = [...this.state.livres];
    newTabLivres.splice(livreIndexTab, 1);
    this.setState({ 
      livres: newTabLivres,
      alertMessage:{
        message:"Livre supprimé avec succès",
        alertType: "alert-danger"
      } 
    });
  };

  bookAddHandler = (title, autor, pages) => {
    const newBook = {
      id: this.state.LastIdBook + 1,
      title: title,
      autor: autor,
      pages: pages,
    };
    const newTabLivres = [...this.state.livres];
    newTabLivres.push(newBook);
    this.setState((oldState) => {
      return {
        livres: newTabLivres,
        alertMessage:{
          message:"Livre ajouté avec succès",
          alertType: "alert-success"
        } ,
        LastIdBook: oldState.LastIdBook + 1,
      };
    });
    this.props.closeAddBook();
  };

  bookModificationHandler = (id, title, autor, pages) => {
    const bookId= this.state.livres.findIndex(
      b=>{return b.id === id}
    );
    const newBook = {id,title,autor,pages};
    const newTabLivres = [...this.state.livres];
    newTabLivres[bookId]= newBook
    this.setState({
      livres: newTabLivres,
      bookToModify: 0,
      alertMessage:{
        message:"Livre modifié avec succès",
        alertType: "alert-info"
      }
      
    })
  };
  render() {
    return (
      <>
      {this.state.alertMessage && <Alert alertType={this.state.alertMessage.alertType}>{this.state.alertMessage.message}</Alert>}
        <table className="table text-center">
          <thead>
            <tr className="table-dark">
              <th>Titres</th>
              <th>Auteurs</th>
              <th>Nombres de pages</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.livres.map((livre) => {
              if (livre.id !== this.state.bookToModify) {
                return (
                  <tr key={livre.id}>
                    <Livre
                      title={livre.title}
                      autor={livre.autor}
                      pages={livre.pages}
                      supprimer={() => this.bookSuppHandler(livre.id)}
                      modifier={() => this.setState({ bookToModify: livre.id })}
                    />
                  </tr>
                );
              } else {
                // Display inputs to modify selected book:
                return (
                  <tr key={livre.id}>
                    <ModifBook
                      id={livre.id}
                      title={livre.title}
                      autor={livre.autor}
                      pages={livre.pages}
                      validateModification={this.bookModificationHandler}
                    />
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {this.props.ajoutLivre && (
          <AddNewBook validating={this.bookAddHandler} />
        )}
      </>
    );
  }
}
export default Books;
