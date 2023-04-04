import React from "react";
import {Facebook } from "react-bootstrap-icons";
import "../static/css/style.css";

function Home() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">
            MovieCard
          </h2>
        </div>

        <div className="menu">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICE</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        
      </div>
      <div className="content">
        <h1>
        Welcome To Our
          <br />
          <span>
          Movie Search 
          </span>
          <br />App!
        </h1>

        <p className="par">Our app is designed to help you easily find and explore your favorite movies. 
          <br />With our user-friendly search interfaceyou can quickly search for any movie by title 
          <br /> and get instant results from our extensive movie database.
          <br />
          <br /> So what are you waiting for?
          <br />Start exploring and discovering your favorite movies today with our movie search app!
        </p>

        <button className="cn">
          <a href="/sign-up">
            JOIN US
          </a>
        </button>

        <div className="form">
          <h2>
            Login Here
          </h2>

          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="" placeholder="Enter Password Here" />
          <button className="btnn">
            <a href="/moviecard">
              Login
            </a>
          </button>

          <p className="link">
            Don't have an account
            <br />
            <a href="/sign-up">
              Sign up here
            </a>
          </p>

          <p className="liw pb-4">
            Log in with
          </p>

          <div className="icons">
            <a href="#"><Facebook clasName="px-3"/></a>
            <a href="#"><Facebook/></a>
            <a href="#"><Facebook/></a>
            <a href="#"><Facebook/></a>
            <a href="#"><Facebook/></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="#"><ion-icon name="logo-google"></ion-icon></a>
            <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
          </div>


        </div>
      </div>

    </div>


  );
};

export default Home;
