import React, { Component } from "react";
import Button from "../../../components/Button/button";

class ModifLivre extends Component {
  // The state is initialized with the values of the Book component:
  state = { 
    titleFiled: this.props.title,
    autorFiled: this.props.autor,
    pagesFiled: this.props.pages,
  };
  handleValidation = () => {
    this.props.validateModification(this.props.id, this.state.titleFiled,this.state.autorFiled,this.state.pagesFiled)
  };
  render() {
    return (
      <>
        <td>
          <input className="form-control" type="text" value={this.state.titleFiled} onChange={(event)=>this.setState({titleFiled: event.target.value})}/>
        </td>
        <td>
          <input className="form-control" type="text" value={this.state.autorFiled} onChange={(event)=>this.setState({autorFiled: event.target.value})}/>
        </td>
        <td>
          <input className="form-control" type="text" value={this.state.pagesFiled} onChange={(event)=>this.setState({pagesFiled: event.target.value})}/>
        </td>
        <td>
        {/* Actions to handle the book modification */}
          <Button btnType="btn-primary" clic={this.handleValidation}>
            Valider
          </Button>
        </td>
      </>
    );
  }
}
export default ModifLivre;
