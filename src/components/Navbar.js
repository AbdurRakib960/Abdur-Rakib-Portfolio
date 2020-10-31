import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a style={{color: "#FFC107"}} class="navbar-brand " href="#">
          Abdur Rakib
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/resume">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/portfolio">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
           
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
