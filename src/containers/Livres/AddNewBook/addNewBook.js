import classes from "./addNewBook.module.css";
import Button from "../../../components/Button/button";
import { withFormik } from "formik";
import * as Yup from "yup";

import React, { Component } from "react";

class AddNewBook extends Component {
  // validationFormHandler = (e) => {
  //   e.preventDefault();
  //   this.props.validating(
  //     this.state.titleFiled,
  //     this.state.autorFiled,
  //     this.state.pagesNumber
  //   );
  //   this.setState({
  //     titleFiled: "",
  //     autorFiled: "",
  //     pagesNumber: "",
  //   })
  // };
  render() {
    const monCss = `${classes.newForm}  p-2 mt-2 text-primary text-center`;
    return (
      <>
        {/* "name" attribute refers to formiK mapPropsToValues */}
        <h2 className={monCss}> Ajout d'un livre</h2>
        {/* Création d'un composant controlé */}
        <form>
          <div className="form-group">
            <label htmlFor="title">Titre du livre</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.props.values.title} //On récupère la valeur de l'input
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            />
            {this.props.touched.title && this.props.errors.title && (
              <span style={{ color: "red" }}>{this.props.errors.title}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="autor">Auteur</label>
            <input
              type="text"
              className="form-control"
              id="autor"
              name="autor"
              value={this.props.values.autor}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            />
            {this.props.touched.autor && this.props.errors.autor && (
              <span style={{ color: "red" }}>{this.props.errors.autor}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="number-of-pages">Nombre de pages</label>
            <input
              type="number"
              className="form-control"
              id="number-of-pages"
              name="pages"
              value={this.props.values.pages}
              onChange={(event)=>this.props.setFieldValue('pages', +event.target.value)}
              onBlur={this.props.handleBlur}
            />
            {this.props.touched.pages && this.props.errors.pages && (
              <span style={{ color: "red" }}>{this.props.errors.pages}</span>
            )}
          </div>
          <Button btnType="btn-primary" clic={this.props.handleSubmit}>
            Valider
          </Button>
        </form>
      </>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    title: "",
    autor: "",
    pages: "",
  }),
  // validate: (values) => {
  //   const errors = {};
  //   if (values.title.length < 3) {
  //     errors.title = "Le titre doit avoir au moins 3 caractères";
  //   }
  //   if (values.title.length > 15) {
  //     errors.title = "Le titre doit avoir moins de 15 caractères";
  //   }
  //   if (!values.autor) {
  //     errors.autor = "Veuillez indiquer un auteur";
  //   }
  //   if (!values.pages) {
  //     errors.pages = "Veuillez indiquer le nombre de pages du livre";
  //   }
  //   return errors;
  // },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(3,"Le titre doit contenir plus de 3 caractères.")
      .max(15, "Le titre doit contenir au maximum 15 caratères.")
      .required('Le titre est obligatoire'),
    autor: Yup.string().required("Veuillez indiquer un auteur"),
    pages: Yup.number()
              .lessThan(1000, "Le nombre de pages inférieur à 1000")
              .moreThan(50, "Nombre de pages supérieur à 50")
  }),
  handleSubmit: (values, { props }) => {
    props.validating(values.title, values.autor, values.pages);
  },
})(AddNewBook);
