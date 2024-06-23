import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"; // Importez les composants Bootstrap nécessaires
import UserService from "../services/user.service";

// Créez une liste d'images
const images = [
  "url_image_1",
  "url_image_2",
  "url_image_3",
  "url_image_4",
  "url_image_5"
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">Job Search</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <header className="jumbotron">
            <h1>Job Search</h1>
            <p>Explorez des milliers d'opportunités d'emploi et postulez dès aujourd'hui.</p>
            <Link to="/jobs">
              <Button variant="primary">Voir les offres d'emploi</Button>
            </Link>
          </header>

          <div className="row">
            {images.map((imageUrl, index) => (
              <div className="col-md-4" key={index}>
                <img src={imageUrl} alt={`Image ${index + 1}`} className="img-fluid mb-3" />
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2>Trouvez votre prochain emploi</h2>
              <p>Parcourez les offres d'emploi disponibles et trouvez celle qui correspond le mieux à votre profil.</p>
            </div>
          </div>
        </div>

        <footer className="footer mt-auto py-3 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>Job Search</p>
                <p>123 Rue de l'Emploi</p>
                <p>contact@jobsearch.com</p>
                <p>+1234567890</p>
              </div>
              <div className="col-md-6 text-right">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
