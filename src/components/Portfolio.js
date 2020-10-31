import React from "react";
import "./Portfolio.css";
import project1 from "../images/project01.png";
import project2 from "../images/project02.png";
import project3 from "../images/project03.png";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import project7 from "../images/panda.png";
import project8 from "../images/project8.png";
import project9 from "../images/project9.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="projects row row-cols-1 row-cols-md-2 m-4">
          <div class="col mb-4 col-md-6 col-lg-4 col-12">
            <div class="card">
              <img src={project1} class="card-img-top" alt="creative agency" />
              <div class="card-body">
                <h5 class="card-title">Creative-Agency</h5>
                <p class="card-text">
                  A complete MERN stack project. An admin can add a service and
                  maintain order. A customer can submit an order and review it.
                  Authentication service is enabled. Only a logged in user can
                  add a service. Firebase and JWT token are also used. So only a
                  valid user can access or add a service.
                </p>
                <div className="icon">
                  <a
                    className="mr-4 pr-4"
                    href="https://github.com/AbdurRakib960/creative-agency-client-site"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://creative-agency-33a1d.web.app/"
                    target="_blank"
                  >
                    <LanguageIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4 col-md-6 col-lg-4 col-12">
            <div class="card">
              <img
                src={project2}
                class="card-img-top"
                alt="Volunteer network"
              />
              <div class="card-body">
                <h5 class="card-title">volunteer-Network</h5>
                <p class="card-text">
                  A complete MERN stack project. A volunteer can apply for an
                  event. There are a dashboard in the site. So admin can add an
                  event and maintain events. Authentication service is enabled.
                  Only a logged in user can add a service. Firebase and JWT
                  token are also used.
                </p>
                <a
                  className="mr-4 pr-4"
                  href="https://github.com/AbdurRakib960/volunteer-client-server"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a href="https://volunteer-auth.web.app/" target="_blank">
                  <LanguageIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="col mb-4 col-md-6 col-lg-4 col-12">
            <div class="card">
              <img src={project3} class="card-img-top" alt="Travel Guru" />
              <div class="card-body">
                <h5 class="card-title">Travel-Guru</h5>
                <p class="card-text">
                  A tour booking system project. A customer can book a tour.
                  Also, a customer can see hotels based on their destination.
                  Only logged in user can book a room. Google map is also
                  added.Travel lover can login the site for visiting a nice
                  place and choice a perfect hotel.
                </p>
                <a
                  className="mr-4 pr-4"
                  href="https://github.com/AbdurRakib960/travel-guru"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a href="https://travel-guru-3de71.web.app/" target="_blank">
                  <LanguageIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="col mb-4 col-md-6 col-lg-4 col-12">
            <div class="card">
              <img src={project7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Panda Commerce</h5>
                <p class="card-text">
                Panda Commerce is a react based and commercial website. There are a
                  lot of products on the home page. Anyone can order a product.
                  Before ordering the products, you have two payment first. In
                  the cart section total amount will added with vat, shipping
                  charge and etc.
                </p>
                <a
                  className="mr-4 pr-4"
                  href="https://github.com/AbdurRakib960/commentBook-assi8"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://vigilant-cray-98f189.netlify.app/"
                  target="_blank"
                >
                  <LanguageIcon />
                </a>
              </div>
            </div>
          </div>

          <div class="col mb-4 col-md-6 col-lg-4 col-12">
            <div class="card">
              <img src={project8} class="card-img-top" alt="online course" />
              <div class="card-body">
                <h5 class="card-title">Online Course</h5>
                <p class="card-text">
                  The Udemydemy online course is a rather based website.It is an
                  educational web site.You can order for a course.Your enrolled
                  items will be stored in the cart.You can order the courses by
                  the payment.
                </p>
                <a
                  className="mr-4 pr-4"
                  href="https://github.com/AbdurRakib960/online-course-ass7"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://elastic-shirley-5ee6fc.netlify.app/"
                  target="_blank"
                >
                  <LanguageIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="col mb-4 col-md-6 col-lg-4 col-12">
            <div class="card">
              <img src={project9} class="card-img-top" alt="ema-john" />
              <div class="card-body">
                <h5 class="card-title">ema-john</h5>
                <p class="card-text">
                  ema-john is a react based and commercial website. There are a
                  lot of products on the home page. Anyone can order a product.
                  Before ordering the products, you have two payment first. In
                  the cart section total amount will added with vat, shipping
                  charge and etc.
                </p>
                <a
                  className="mr-4 pr-4"
                  href="https://github.com/AbdurRakib960/ema-john-simple"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://pensive-davinci-6953cd.netlify.app/"
                  target="_blank"
                >
                  <LanguageIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
