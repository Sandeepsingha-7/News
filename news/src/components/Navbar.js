import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
                <Link className="nav-link" href="/entertainment">Entertainment</Link>
                <Link className="nav-link" href="/general">General</Link>
                <Link className="nav-link" to="/health">Health</Link>
                <Link className="nav-link" to="/science">Science</Link>
                <Link className="nav-link" to="/sports">Sports</Link>
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

